const button = document.getElementById("button");

const selectType = document.getElementById("selectType");

const input = document.querySelector(".input");

const containerHtml = document.querySelector(".container");

const errorHtml = document.querySelector(".error");

button.addEventListener('click', GetInformationSwapi)

function GetInformationSwapi() {

    const optionValue = selectType.value;

    const inputValue = input.value;

    const requestOptions = {

        method: 'GET',

        redirect: 'follow'
    };
    try {
        fetch(`https://swapi.dev/api/${optionValue}/${inputValue}`, requestOptions)

            .then(response => response.text())

            .then(result => {

                console.log(result);

                CreateInfo(JSON.parse(result));
            })
    }
    catch { (error => console.log('error', error)); }

    finally {
        console.log('finally');
    }

}

function CreateInfo(result) {

    let htmlInfo;

    let htmlError;

    for (key in result) {

        if (Object.hasOwnProperty.call(result, key)) {

            const value = result[key];

            if (key === 'name') {

                htmlInfo = `

                <p class='para'>Информация: ${value}</p>
                
                `;

                containerHtml.innerHTML = htmlInfo;

                errorHtml.innerHTML = ''

            }
            if (value == 'Not found') {

                htmlError = `

                <p class='para'>Ошибка: объект не найден!</p>
                
                `;

                errorHtml.innerHTML = htmlError;

                containerHtml.innerHTML = ''

            }
            // console.log(`Key: ${key}, Value: ${value} `);
        }
    }
}