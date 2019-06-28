'use strict';

// РљРѕРґ РІР°Р»РёРґР°С†РёРё С„РѕСЂРјС‹
function validateForm(setting) {
    let form = document.getElementById(setting.formId);

    let inputErrorClass = setting.inputErrorClass;
    let formValidClass = setting.formValidClass;
    let formInvalidClass = setting.formInvalidClass;


    form.addEventListener('blur', function(e) {
        if (e.target.tagName !== 'INPUT') return;

        checkInput(e.target);
    }, true);

    form.addEventListener('focus', function(e) {
        if (e.target.tagName !== 'INPUT') return;

        e.target.classList.remove(inputErrorClass);
    }, true);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        submitForm(this);
    });


    function checkInput(elem) {
        let value = elem.value;
        let validator = elem.dataset.validator;
        console.log(elem.dataset.hasOwnProperty('required'));
        if (!elem.dataset.hasOwnProperty('required') && !value) {
            return validInput();
        }

        if (validator === 'letters' && !value.match(/[А-ЯA-Z]/gi)) {
            return errorInput();
        }

        if (validator === 'number') {
            if  (!value.match(/\d/)) {
                return errorInput();
            }

            if (elem.dataset.validatorMax && parseInt(value) > parseInt(elem.dataset.validatorMax)) {
                return errorInput();
            }

            if (elem.dataset.validatorMin && parseInt(value) < parseInt(elem.dataset.validatorMin)) {
                return errorInput();
            }
        }

        if (validator === 'regexp' && !value.match(elem.dataset.validatorPattern)) {
            return errorInput();
        }

        return validInput();


        function errorInput() {
            elem.classList.add(inputErrorClass);
            return false;
        }

        function validInput() {
            elem.classList.remove(inputErrorClass);
            return true;
        }
    }

    function submitForm(form) {
        let isFormValid = true;
        let elems = Array.from(form.querySelectorAll('input'));

        elems.forEach(function (elem) {
            if (!checkInput(elem)) {
                isFormValid = false;
            }
        });

        if (isFormValid){
            form.classList.remove(formInvalidClass);
            form.classList.add(formValidClass);
        } else {
            form.classList.remove(formValidClass);
            form.classList.add(formInvalidClass);
        }
    }
}