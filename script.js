
    // tailwind.config = {
    //     theme: {
    //         extend: {
    //             colors: {
    //                 ayur: {
    //                     50: '#f0f9f4',
    //                     100: '#dcf4e3',
    //                     200: '#bbe8ca',
    //                     300: '#8dd5a7',
    //                     400: '#5abb7d',
    //                     500: '#36a05b',
    //                     600: '#2a8248',
    //                     700: '#24683c',
    //                     800: '#1f5332',
    //                     900: '#1c442a'
    //                 }
    //             }
    //         }
    //     }
    // }

    // // Initialize dropdown functionality
    // document.addEventListener('DOMContentLoaded', function() {
    //     // Show landing page by default
    //     showPage('landing');

    //     const signInBtn = document.getElementById('signInBtn');
    //     const dropdown = document.getElementById('signInDropdown');

    //     if (signInBtn && dropdown) {
    //         // Toggle dropdown when button is clicked
    //         signInBtn.addEventListener('click', function(e) {
    //             e.stopPropagation();
    //             dropdown.classList.toggle('hidden');
    //         });

    //         // Close dropdown when clicking outside
    //         document.addEventListener('click', function(e) {
    //             if (!signInBtn.contains(e.target) && !dropdown.contains(e.target)) {
    //                 dropdown.classList.add('hidden');
    //             }
    //         });

    //         // Close dropdown when pressing Escape key
    //         document.addEventListener('keydown', function(e) {
    //             if (e.key === 'Escape') {
    //                 dropdown.classList.add('hidden');
    //             }
    //         });

    //         // Close dropdown when menu item is clicked
    //         dropdown.addEventListener('click', function() {
    //             dropdown.classList.add('hidden');
    //         });
    //     }

    //     // Initialize charts after a short delay
    //     setTimeout(initializeCharts, 500);
    // });

    // // Page navigation functions
    // function showPage(pageId) {
    //     // Hide all pages
    //     const pages = document.querySelectorAll('.page');
    //     pages.forEach(page => page.classList.add('hidden'));

    //     // Show selected page
    //     const targetPage = document.getElementById(pageId);
    //     if (targetPage) {
    //         targetPage.classList.remove('hidden');
    //     }
    // }

    // function scrollToSection(sectionId) {
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //         section.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }

    // // Patient registration functions
    // let currentPatientStep = 1;

    // function nextPatientStep() {
    //     if (currentPatientStep < 3) {
    //         document.getElementById(`patient-step${currentPatientStep}`).classList.add('hidden');
    //         currentPatientStep++;
    //         document.getElementById(`patient-step${currentPatientStep}`).classList.remove('hidden');
    //         updatePatientProgress();
    //     }
    // }

    // function prevPatientStep() {
    //     if (currentPatientStep > 1) {
    //         document.getElementById(`patient-step${currentPatientStep}`).classList.add('hidden');
    //         currentPatientStep--;
    //         document.getElementById(`patient-step${currentPatientStep}`).classList.remove('hidden');
    //         updatePatientProgress();
    //     }
    // }

    // function updatePatientProgress() {
    //     // Update step indicators
    //     for (let i = 1; i <= 3; i++) {
    //         const indicator = document.getElementById(`step${i}-indicator`);
    //         const progress = document.getElementById(`progress${i}`);

    //         if (i <= currentPatientStep) {
    //             indicator.classList.remove('bg-gray-300', 'text-gray-600');
    //             indicator.classList.add('bg-ayur-600', 'text-white');
    //             indicator.nextElementSibling.classList.remove('text-gray-600');
    //             indicator.nextElementSibling.classList.add('text-ayur-800');
    //         } else {
    //             indicator.classList.remove('bg-ayur-600', 'text-white');
    //             indicator.classList.add('bg-gray-300', 'text-gray-600');
    //             indicator.nextElementSibling.classList.remove('text-ayur-800');
    //             indicator.nextElementSibling.classList.add('text-gray-600');
    //         }

    //         if (progress && i < currentPatientStep) {
    //             progress.classList.remove('bg-gray-300');
    //             progress.classList.add('bg-ayur-600');
    //         } else if (progress) {
    //             progress.classList.remove('bg-ayur-600');
    //             progress.classList.add('bg-gray-300');
    //         }
    //     }
    // }

    // function updatePatientStressValue(value) {
    //     document.getElementById('patientStressValue').textContent = value;
    // }

    // function togglePatientTherapyDetails() {
    //     const therapyDetails = document.getElementById('patientTherapyDetails');
    //     const selectedValue = document.querySelector('input[name="patientPastTherapy"]:checked')?.value;

    //     if (selectedValue && selectedValue !== 'none') {
    //         therapyDetails.classList.remove('hidden');
    //     } else {
    //         therapyDetails.classList.add('hidden');
    //     }
    // }

    // function handlePatientNoAllergies(checkbox) {
    //     const otherCheckboxes = document.querySelectorAll('input[name="patientAllergyTypes"]:not([value="none"])');
    //     if (checkbox.checked) {
    //         otherCheckboxes.forEach(cb => cb.checked = false);
    //     }
    // }

    // function handlePatientSubmit(event) {
    //     event.preventDefault();
    //     alert('Registration submitted successfully! You will receive a confirmation email shortly.');
    //     showPage('patient-dashboard');
    //     // This is the key fix: call showDashboardSection with a section ID.
    //     // The event object is not available here, so we must rely on the ID.
    //     showDashboardSection('dashboard');
    // }

    // // Professional registration functions
    // function updateProfessionalForm() {
    //     const selectedType = document.querySelector('input[name="professionalType"]:checked')?.value;
    //     const formFields = document.getElementById('professionalFormFields');
    //     const allFields = document.querySelectorAll('.professional-fields');

    //     // Hide all field sets
    //     allFields.forEach(field => field.classList.add('hidden'));

    //     if (selectedType) {
    //         // Show form fields container
    //         formFields.classList.remove('hidden');

    //         // Show specific field set
    //         const targetFields = document.getElementById(`${selectedType}Fields`);
    //         if (targetFields) {
    //             targetFields.classList.remove('hidden');
    //         }

    //         // Update card styling
    //         document.querySelectorAll('.professional-type-card').forEach(card => {
    //             const input = card.querySelector('input');
    //             const cardDiv = card.querySelector('div');
    //             if (input.checked) {
    //                 cardDiv.classList.remove('border-gray-300');
    //                 cardDiv.classList.add('border-ayur-500', 'bg-ayur-50');
    //             } else {
    //                 cardDiv.classList.remove('border-ayur-500', 'bg-ayur-50');
    //                 cardDiv.classList.add('border-gray-300');
    //             }
    //         });
    //     } else {
    //         formFields.classList.add('hidden');
    //     }
    // }

    // function handleProfessionalSubmit(event) {
    //     event.preventDefault();
    //     alert('Professional application submitted! We will review your credentials and contact you within 2-3 business days.');
    //     showPage('doctor-dashboard');
    //     showDashboardSection('doctor-dashboard');
    // }

    // // Dashboard functions
    // function showDashboardSection(sectionId, event = null) {
    //     // Hide all dashboard sections
    //     const sections = document.querySelectorAll('.dashboard-section');
    //     sections.forEach(section => section.classList.add('hidden'));

    //     // Show selected section
    //     const targetSection = document.getElementById(`${sectionId}-section`);
    //     if (targetSection) {
    //         targetSection.classList.remove('hidden');
    //     }

    //     // Update navigation styling
    //     document.querySelectorAll('.dashboard-nav-btn').forEach(btn => {
    //         btn.classList.remove('text-ayur-900', 'font-bold');
    //         btn.classList.add('text-ayur-700');
    //     });
        
    //     // Find and style the active button based on sectionId
    //     const activeButton = document.querySelector(`.dashboard-nav-btn[onclick*="showDashboardSection('${sectionId}')"]`);
    //     if (activeButton) {
    //         activeButton.classList.remove('text-ayur-700');
    //         activeButton.classList.add('text-ayur-900', 'font-bold');
    //     }
    // }

    // // Utility functions for dashboard
    // function bookAppointment() {
    //     alert('Appointment booking feature coming soon!');
    // }

    // function viewAllAppointments() {
    //     alert('Viewing all appointments...');
    // }

    // function viewSessionDetails() {
    //     alert('Session details will be displayed here.');
    // }

    // function provideFeedback() {
    //     alert('Feedback form will open here.');
    // }

    // function viewFullPlan() {
    //     alert('Complete treatment plan will be displayed.');
    // }

    // function logMood(mood) {
    //     alert(`Mood logged as: ${mood}`);
    // }

    // function detailedHealthLog() {
    //     alert('Detailed health logging form will open.');
    // }

    // function showNotifications() {
    //     alert('Notifications panel will open here.');
    // }

    // function updateProgressChart() {
    //     // Chart update logic would go here
    //     console.log('Updating progress chart...');
    // }

    // function exportChart(type) {
    //     alert(`Exporting ${type} chart...`);
    // }

    // function exportReport(format) {
    //     alert(`Exporting report in ${format} format...`);
    // }

    // // Initialize charts when dashboard loads
    // function initializeCharts() {
    //     // Progress Chart
    //     const progressCtx = document.getElementById('progressChart');
    //     if (progressCtx) {
    //         new Chart(progressCtx, {
    //             type: 'line',
    //             data: {
    //                 labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    //                 datasets: [{
    //                     label: 'Overall Progress',
    //                     data: [45, 60, 70, 78],
    //                     borderColor: '#36a05b',
    //                     backgroundColor: 'rgba(54, 160, 91, 0.1)',
    //                     tension: 0.4
    //                 }]
    //             },
    //             options: {
    //                 responsive: true,
    //                 maintainAspectRatio: false,
    //                 scales: {
    //                     y: {
    //                         beginAtZero: true,
    //                         max: 100
    //                     }
    //                 }
    //             }
    //         });
    //     }

    //     // Symptom Chart
    //     const symptomCtx = document.getElementById('symptomChart');
    //     if (symptomCtx) {
    //         new Chart(symptomCtx, {
    //             type: 'radar',
    //             data: {
    //                 labels: ['Pain', 'Stress', 'Sleep', 'Energy', 'Mood', 'Digestion'],
    //                 datasets: [{
    //                     label: 'Before Treatment',
    //                     data: [8, 9, 3, 2, 4, 5],
    //                     borderColor: '#ef4444',
    //                     backgroundColor: 'rgba(239, 68, 68, 0.2)'
    //                 }, {
    //                     label: 'Current',
    //                     data: [2, 3, 9, 8, 8, 8],
    //                     borderColor: '#36a05b',
    //                     backgroundColor: 'rgba(54, 160, 91, 0.2)'
    //                 }]
    //             },
    //             options: {
    //                 responsive: true,
    //                 maintainAspectRatio: false,
    //                 scales: {
    //                     r: {
    //                         beginAtZero: true,
    //                         max: 10
    //                     }
    //                 }
    //             }
    //         });
    //     }
    // }




    // This is the complete and corrected JavaScript code block.
// Replace your entire <script> content with this code.

tailwind.config = {
    theme: {
        extend: {
            colors: {
                ayur: {
                    50: '#f0f9f4',
                    100: '#dcf4e3',
                    200: '#bbe8ca',
                    300: '#8dd5a7',
                    400: '#5abb7d',
                    500: '#36a05b',
                    600: '#2a8248',
                    700: '#24683c',
                    800: '#1f5332',
                    900: '#1c442a'
                }
            }
        }
    }
}

// Initialize dropdown functionality and default page view
document.addEventListener('DOMContentLoaded', function() {
    showPage('landing');

    const signInBtn = document.getElementById('signInBtn');
    const dropdown = document.getElementById('signInDropdown');

    if (signInBtn && dropdown) {
        signInBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('hidden');
        });
        
        document.addEventListener('click', function(e) {
            if (!signInBtn.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                dropdown.classList.add('hidden');
            }
        });

        dropdown.addEventListener('click', function() {
            dropdown.classList.add('hidden');
        });
    }

    setTimeout(initializeCharts, 500);
});

// Main function to show a specific page
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');

        // Automatically show the default dashboard section after navigation
        if (pageId === 'patient-dashboard') {
            showDashboardSection('dashboard');
        } else if (pageId === 'doctor-dashboard') {
            showDashboardSection('doctor-dashboard');
        }
    }
}

// Scroll to a specific section on the landing page
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Patient registration form logic
let currentPatientStep = 1;

function nextPatientStep() {
    if (currentPatientStep < 3) {
        document.getElementById(`patient-step${currentPatientStep}`).classList.add('hidden');
        currentPatientStep++;
        document.getElementById(`patient-step${currentPatientStep}`).classList.remove('hidden');
        updatePatientProgress();
    }
}

function prevPatientStep() {
    if (currentPatientStep > 1) {
        document.getElementById(`patient-step${currentPatientStep}`).classList.add('hidden');
        currentPatientStep--;
        document.getElementById(`patient-step${currentPatientStep}`).classList.remove('hidden');
        updatePatientProgress();
    }
}

function updatePatientProgress() {
    for (let i = 1; i <= 3; i++) {
        const indicator = document.getElementById(`step${i}-indicator`);
        const progress = document.getElementById(`progress${i}`);
        
        if (i <= currentPatientStep) {
            indicator.classList.remove('bg-gray-300', 'text-gray-600');
            indicator.classList.add('bg-ayur-600', 'text-white');
            if (indicator.nextElementSibling) {
                indicator.nextElementSibling.classList.remove('text-gray-600');
                indicator.nextElementSibling.classList.add('text-ayur-800');
            }
        } else {
            indicator.classList.remove('bg-ayur-600', 'text-white');
            indicator.classList.add('bg-gray-300', 'text-gray-600');
            if (indicator.nextElementSibling) {
                indicator.nextElementSibling.classList.remove('text-ayur-800');
                indicator.nextElementSibling.classList.add('text-gray-600');
            }
        }
        
        if (progress && i < currentPatientStep) {
            progress.classList.remove('bg-gray-300');
            progress.classList.add('bg-ayur-600');
        } else if (progress) {
            progress.classList.remove('bg-ayur-600');
            progress.classList.add('bg-gray-300');
        }
    }
}

function updatePatientStressValue(value) {
    document.getElementById('patientStressValue').textContent = value;
}

function togglePatientTherapyDetails() {
    const therapyDetails = document.getElementById('patientTherapyDetails');
    const selectedValue = document.querySelector('input[name="patientPastTherapy"]:checked')?.value;
    
    if (selectedValue && selectedValue !== 'none') {
        therapyDetails.classList.remove('hidden');
    } else {
        therapyDetails.classList.add('hidden');
    }
}

function handlePatientNoAllergies(checkbox) {
    const otherCheckboxes = document.querySelectorAll('input[name="patientAllergyTypes"]:not([value="none"])');
    if (checkbox.checked) {
        otherCheckboxes.forEach(cb => cb.checked = false);
    }
}

function handlePatientSubmit(event) {
    event.preventDefault();
    alert('Registration submitted successfully! You will receive a confirmation email shortly.');
    // This call will now trigger the correct dashboard view
    showPage('patient-dashboard');
}

// Professional registration form logic
function updateProfessionalForm() {
    const selectedType = document.querySelector('input[name="professionalType"]:checked')?.value;
    const formFields = document.getElementById('professionalFormFields');
    const allFields = document.querySelectorAll('.professional-fields');
    
    allFields.forEach(field => field.classList.add('hidden'));
    
    if (selectedType) {
        formFields.classList.remove('hidden');
        const targetFields = document.getElementById(`${selectedType}Fields`);
        if (targetFields) {
            targetFields.classList.remove('hidden');
        }
        
        document.querySelectorAll('.professional-type-card').forEach(card => {
            const input = card.querySelector('input');
            const cardDiv = card.querySelector('div');
            if (input.checked) {
                cardDiv.classList.remove('border-gray-300');
                cardDiv.classList.add('border-ayur-500', 'bg-ayur-50');
            } else {
                cardDiv.classList.remove('border-ayur-500', 'bg-ayur-50');
                cardDiv.classList.add('border-gray-300');
            }
        });
    } else {
        formFields.classList.add('hidden');
    }
}

function handleProfessionalSubmit(event) {
    event.preventDefault();
    alert('Professional application submitted! We will review your credentials and contact you within 2-3 business days.');
    showPage('doctor-dashboard');
}

// Dashboard navigation and display logic
function showDashboardSection(sectionId) {
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(section => section.classList.add('hidden'));

    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    document.querySelectorAll('.dashboard-nav-btn').forEach(btn => {
        btn.classList.remove('text-ayur-900', 'font-bold');
        btn.classList.add('text-ayur-700');
    });

    const activeButton = document.querySelector(`.dashboard-nav-btn[onclick*="showDashboardSection('${sectionId}')"]`);
    if (activeButton) {
        activeButton.classList.remove('text-ayur-700');
        activeButton.classList.add('text-ayur-900', 'font-bold');
    }
}

// Placeholder functions for dashboard actions
function bookAppointment() {
    alert('Appointment booking feature coming soon!');
}

function viewAllAppointments() {
    alert('Viewing all appointments...');
}

function viewSessionDetails() {
    alert('Session details will be displayed here.');
}

function provideFeedback() {
    alert('Feedback form will open here.');
}

function viewFullPlan() {
    alert('Complete treatment plan will be displayed.');
}

function logMood(mood) {
    alert(`Mood logged as: ${mood}`);
}

function detailedHealthLog() {
    alert('Detailed health logging form will open.');
}

function showNotifications() {
    alert('Notifications panel will open here.');
}

function updateProgressChart() {
    console.log('Updating progress chart...');
}

function exportChart(type) {
    alert(`Exporting ${type} chart...`);
}

function exportReport(format) {
    alert(`Exporting report in ${format} format...`);
}

// Initialize charts using Chart.js
function initializeCharts() {
    const progressCtx = document.getElementById('progressChart');
    if (progressCtx) {
        new Chart(progressCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Overall Progress',
                    data: [45, 60, 70, 78],
                    borderColor: '#36a05b',
                    backgroundColor: 'rgba(54, 160, 91, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    const symptomCtx = document.getElementById('symptomChart');
    if (symptomCtx) {
        new Chart(symptomCtx, {
            type: 'radar',
            data: {
                labels: ['Pain', 'Stress', 'Sleep', 'Energy', 'Mood', 'Digestion'],
                datasets: [{
                    label: 'Before Treatment',
                    data: [8, 9, 3, 2, 4, 5],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.2)'
                }, {
                    label: 'Current',
                    data: [2, 3, 9, 8, 8, 8],
                    borderColor: '#36a05b',
                    backgroundColor: 'rgba(54, 160, 91, 0.2)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10
                    }
                }
            }
        });
    }
}