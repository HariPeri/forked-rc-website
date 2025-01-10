$(document).ready(function () {
    console.log("Script started");
    console.log("Updated Combined Request Form JS loaded");

    // Constants and Configuration
    
    const API_CONFIG = {
        baseUrl: 'https://uvarc-unified-service.pods.uvarc.io/uvarc/api/resource/rcwebform/user',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    };
    
    const RESOURCE_TYPES = {
        'Standard': { 
            isPaid: false,
            description: 'Standard allocation for research projects',
            category: 'Rivanna HPC'
        },
        'Paid': { 
            isPaid: true,
            description: 'Paid allocation for additional computing needs',
            category: 'Rivanna HPC'
        },
        'Instructional': { 
            isPaid: false,
            description: 'Allocation for teaching and educational purposes',
            category: 'Rivanna HPC'
        },
        'SSZ Research Project': { 
            isPaid: true,
            description: 'High-performance project storage',
            category: 'Storage'
        },
        'SSZ Research Standard': { 
            isPaid: (currentSize) => currentSize > 10,
            freeLimit: 10,
            description: 'Standard research storage (first 10TB free)',
            category: 'Storage'
        },
        'Highly Sensitive Data': {
            isPaid: true,
            description: 'Secure storage for sensitive data',
            category: 'Storage'
        }
    };

    // Holds API response data

    let consoleData = [];

    // CSS Styles

    $('<style>')
        .text(`
            .group-dropdown option {
                padding: 8px;
                margin: 2px;
                border-radius: 4px;
            }
            .group-dropdown option.text-muted { 
                color: #6c757d !important;
                background-color: #f8f9fa;
            }
            .group-dropdown option:disabled {
                color: #adb5bd !important;
                font-style: italic;
                background-color: #f8f9fa !important;
                cursor: not-allowed;
            }
            .api-error-message {
                margin-bottom: 1rem;
                padding: 1rem;
                border-radius: 0.25rem;
                border: 1px solid #f5c6cb;
                background-color: #f8d7da;
                color: #721c24;
            }
        `)
        .appendTo('head');

    // Validation Patterns

    const VALIDATION = {
        groupName: /^[a-zA-Z0-9\-_]+$/,
        projectName: /^[\w\-\s]{3,128}$/,
        sharedSpaceName: /^[\w\-]{3,40}$/
    };

    // Utility and Helper Function

    function validateField($field) {
        if (!$field.val()) {
            markFieldInvalid($field, 'This field is required.');
            return false;
        }
        markFieldValid($field);
        return true;
    }

    // Error Handling
    function showErrorMessage(message) {
        const errorDiv = $('<div>').addClass('alert alert-danger').text(message);
        $('#combined-request-form').prepend(errorDiv);
        setTimeout(() => errorDiv.remove(), 5000);
    }

    function handleApiError(error) {
        const message = 'There was an error processing your request. Please try again.';
        console.error("API Error:", error);
        $('#combined-request-form').prepend(
            $('<div>')
                .addClass('alert alert-danger')
                .text(message)
        );
    }
    
    function logApiError(error, context) {
        console.error(`API Error (${context}):`, error);
    }

    // UI Toggles
    
    function toggleRequestFields() {
        const requestType = $('input[name="request-type"]:checked').val();
        $('#allocation-fields, #storage-fields, #common-fields').hide();

        if (requestType === 'service-unit') {
            $('#allocation-fields, #common-fields').show();
        } else if (requestType === 'storage') {
            $('#storage-fields, #common-fields').show();
        }

        updateBillingVisibility();
    }

    function toggleStorageFields() {
        const typeOfRequest = $('input[name="type-of-request"]:checked').val();
        const isNewStorage = typeOfRequest === 'new-storage';
        $('#storage-platform, #shared-space-name-container').toggle(isNewStorage);
        $('#existing-projects-storage').toggle(!isNewStorage);
        updateFormValidation();
    }

    function toggleStorageTierOptions() {
        const selectedStorage = $('input[name="storage-choice"]:checked').val();
    
        if (!selectedStorage) return;
    
        const isHighlySensitive = selectedStorage === 'Highly Sensitive Data';
        $('#sensitive-data').toggle(isHighlySensitive);
        $('#standard-data').toggle(!isHighlySensitive);
        updateCapacityLimits(selectedStorage);
    }

    // Event Handlers

    function setupEventHandlers() {
        $('input[name="request-type"]').on('change', function () {
            toggleRequestFields();
            updatePayloadPreview();
        });

        $('input[name="new-or-renewal"]').on('change', function () {
            toggleAllocationFields();
            updatePayloadPreview();
        });

        $('input[name="type-of-request"]').on('change', function () {
            toggleStorageFields();
            updatePayloadPreview();
        });

        $('input[name="storage-choice"]').on('change', function () {
            toggleStorageTierOptions();
            updatePayloadPreview();
        });

        $('#data-agreement').on('change', function () {
            updateFormValidation();
            updatePayloadPreview();
        });

        $('#combined-request-form input, #combined-request-form select, #combined-request-form textarea')
            .on('input change', function () {
                validateField($(this));
                updateFormValidation();
                updatePayloadPreview();
            });

        console.log('Event handlers successfully set up.');
    }

    // Capacity Limits and Billing Visibility
    
    function updateCapacityLimits(tierType) {
        const capacityField = $('#capacity');
        const maxLimits = {
            'SSZ Research Standard': 200,
            'Highly Sensitive Data': 100,
            'SSZ Research Project': 500
        };
        capacityField.attr('max', maxLimits[tierType] || 200);
    }

    function updateBillingVisibility() {
        const selectedStorageTier = $('input[name="storage-choice"]:checked').val();
        const selectedGroup = $('#mygroups-group').val();
        const requestedStorageSize = parseInt($('#capacity').val(), 10) || 0;
    
        let shouldShowBilling = false;
    
        if (selectedStorageTier === "SSZ Research Standard") {
            const freeLimit = RESOURCE_TYPES["SSZ Research Standard"].freeLimit || 10;
            shouldShowBilling = requestedStorageSize > freeLimit;
        } else if (["SSZ Research Project", "Highly Sensitive Data"].includes(selectedStorageTier)) {
            shouldShowBilling = true;
        }
    
        $('#billing-information').toggle(shouldShowBilling);
    }

    // Real-Time Payload Preview

    function setupPayloadPreviewUpdater() {
        $('#combined-request-form input, #combined-request-form select, #combined-request-form textarea')
            .on('input change', function () {
                updatePayloadPreview();
            });
        console.log("Payload preview updater initialized.");
    }

    function updatePayloadPreview() {
        const payload = buildPayloadPreview();
        const errors = validatePayload(payload);
        console.log("Payload Preview:", JSON.stringify(payload, null, 2));

        if (errors.length > 0) {
            console.error("Payload Errors:", errors);
        } else {
            console.log("Payload Valid.");
        }
    }

    function buildPayloadPreview() {
        const formData = collectFormData();
        const computingId = $('#uid').val() || "Unknown";

        const payload = [{
            data_agreement_signed: $('#data-agreement').is(':checked'),
            group_name: formData.group || "Unknown Group",
            pi_uid: computingId,
            project_desc: $('#project-description').val() || "",
            project_name: formData.projectName || "",
            resources: {
                hpc_service_units: {},
                storage: {}
            }
        }];

        if (formData.requestType === 'service-unit') {
            const key = `${formData.group}-${getTierEnum(formData.allocationTier)}`;
            payload[0].resources.hpc_service_units[key] = {
                tier: getTierEnum(formData.allocationTier),
                request_count: formData.requestCount || "1000",
                billing_details: formData.shouldShowBilling ? getBillingDetails() : undefined
            };
        } else if (formData.requestType === 'storage') {
            const key = `${formData.group}-${getStorageTierEnum(formData.storageTier)}`;
            payload[0].resources.storage[key] = {
                tier: getStorageTierEnum(formData.storageTier),
                request_size: formData.capacity?.toString() || "0",
                billing_details: formData.shouldShowBilling ? getBillingDetails() : undefined
            };
        }

        return payload;
    }

    function validatePayload(payload) {
        const errors = [];
        if (!payload[0].group_name) errors.push("Group name is missing.");
        if (!payload[0].project_name) errors.push("Project name is missing.");
        if (!payload[0].data_agreement_signed) errors.push("Data agreement must be signed.");
        if (!payload[0].resources.hpc_service_units && !payload[0].resources.storage) {
            errors.push("At least one resource type must be included.");
        }
        return errors;
    }

    // Fetch & Populate Groups

    async function fetchAndPopulateGroups() {
        // Show a waiting message (use utility function if available)
        const waitingMessage = utils?.showWaitingMessage?.() || $('<div>').text('Loading...').prependTo('#combined-request-form');
        
        try {
            // Ensure the user session is established
            const computingId = await waitForUserSession();
            console.log(`Attempting API call for user: ${computingId}`);

            // Construct the API request URL
            const requestUrl = `${API_CONFIG.baseUrl}/${computingId}`;
            console.log("Request URL:", requestUrl);

            // Perform the fetch call with credentials included
            const response = await fetch(requestUrl, {
                method: 'GET',
                headers: API_CONFIG.headers,
                credentials: 'include', // Required for cross-origin requests with cookies
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            // Parse the JSON response
            consoleData = await response.json();
            console.log("Fetched groups and resources:", consoleData);

            // Parse and populate user groups and resources
            const { userGroups, userResources } = parseConsoleData(consoleData);

            // Populate dropdowns for user groups
            if (Array.isArray(userGroups) && userGroups.length > 0) {
                console.log("Populating user groups:", userGroups);
                populateGrouperMyGroupsDropdown(userGroups);
            } else {
                console.warn("No user groups found.");
                populateGrouperMyGroupsDropdown([]);
            }

            // Process user resources if available
            if (Array.isArray(userResources) && userResources.length > 0) {
                console.log("Processing user resources...");
                processUserResources(consoleData);
            } else {
                console.warn("No user resources found.");
            }
        } catch (error) {
            console.error("Error fetching user groups:", error);
            handleApiError(error); // Display a user-friendly error message
        } finally {
            // Remove the waiting message
            utils?.removeWaitingMessage?.() || waitingMessage.remove();
        }
    }

    // Resource Processing Functions

    function processUserResources(apiResponse) {
        const { userResources } = parseConsoleData(apiResponse);
        const previewTableBody = $('#combined-preview-tbody');
        previewTableBody.empty();
    
        if (!Array.isArray(userResources) || userResources.length === 0) {
            showEmptyState(previewTableBody);
            return;
        }
    
        userResources.forEach(resource => {
            if (resource.resources?.hpc_service_units) {
                Object.entries(resource.resources.hpc_service_units).forEach(([allocationName, details]) => {
                    const row = createResourceRow({
                        type: 'Service Units',
                        group: resource.group_name,
                        tier: details.tier,
                        details: `${details.request_count || 0} SUs | Updated: ${details.update_date}`
                    });
                    previewTableBody.append(row);
                });
            }
    
            if (resource.resources?.storage) {
                Object.entries(resource.resources.storage).forEach(([storageName, details]) => {
                    const row = createResourceRow({
                        type: 'Storage',
                        group: resource.group_name,
                        tier: details.tier,
                        details: `${details.request_size || 0}TB | Updated: ${details.update_date}`
                    });
                    previewTableBody.append(row);
                });
            }
        });
    }

    // Update Form Validation

    function updateFormValidation() {
        const $form = $('#combined-request-form');
        const requestType = $('input[name="request-type"]:checked').val();
        const visibleFieldsSelector = requestType === 'service-unit' 
            ? '#allocation-fields input[required]:visible, #allocation-fields select[required]:visible'
            : '#storage-fields input[required]:visible, #storage-fields select[required]:visible';
    
        const requiredFields = $form.find(visibleFieldsSelector);
        const isFormValid = requiredFields.toArray().every(field => !!$(field).val()?.trim());
        $('#submit').prop('disabled', !isFormValid);
    }

      // Initialization Function

      async function initialize() {
        console.log("Initializing form...");
        try {
            // Hide specific sections initially
            $('#allocation-fields, #storage-fields, #common-fields').hide();
            $('#billing-information').hide();

            // Fetch user groups and populate dropdowns
            await fetchAndPopulateGroups();

            // Setup event handlers
            setupEventHandlers();

            // Setup real-time payload preview
            setupPayloadPreviewUpdater();

            // Initialize UI toggles
            toggleRequestFields();
            updateFormValidation();

            console.log("Form initialization complete.");
        } catch (error) {
            console.error("Error during form initialization:", error);
            showErrorMessage("Failed to initialize form. Please refresh the page.");
        }
    }

    // Start Initialization
    initialize();
});