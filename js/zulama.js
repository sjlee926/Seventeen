const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");


function calculator() {
    const nameValue = document.querySelector("#name_value");
    const nameResult = document.querySelector(".name_result");
    const yearResult = document.querySelector(".year_result");

    if (nameValue.value === "") {
        alert('이름이 입력되지 않았습니다.');
        nameValue.focus();
        return false;
    }

    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        result.style.display = "flex";
        loading.style.display = "none";
        nameResult.innerText = nameValue.value;

        switch (nameValue.value) {
            case '에스쿱스':
                yearResult.innerText = '8월 8일';
                break;
            case '정한':
                yearResult.innerText = '10월 4일';
                break;
            case '조슈아':
                yearResult.innerText = '12월 30일';
                break;
            case '준':
                yearResult.innerText = '6월 10일';
                break;
            case '호시':
                yearResult.innerText = '6월 15일';
                break;
            case '원우':
                yearResult.innerText = '7월 17일';
                break;
            case '우지':
                yearResult.innerText = '11월 22일';
                break;
            case '디에잇':
                yearResult.innerText = '11월 7일';
                break;
            case '민규':
                yearResult.innerText = '4월 6일';
                break;
            case '도겸':
                yearResult.innerText = '2월 18일';
                break;
            case '승관':
                yearResult.innerText = '1월 16일';
                break;
            case '버논':
                yearResult.innerText = '2월 18일';
                break;
            case '디노':
                yearResult.innerText = '2월 11일';
                break;
            default:
                yearResult.innerText = '알 수 없는 생일';
        }
    }, 1000);
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal) {
        closeModal();
    }
};

function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input');
    

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	document.execCommand("copy");
    document.body.removeChild(tmp);
    
	alert("URL이 복사되었습니다"); 
}

startButton.addEventListener("click", calculator);
closeButton.addEventListener("click", closeModal);
shareButton.addEventListener('click', copyUrl);
openButton.addEventListener("click", openModal);