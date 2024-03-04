// const showTooltip = document.getElementById('tooltip');
// console.log(showTooltip);


//
const spinnerOfCard1 = document.getElementById('spinner1');
    // spinnerOfCard1.classList.remove('hidden');

const showProductionOfCard1 = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const dataPosts = data.posts;
    // console.log(dataPosts);

    displayData(dataPosts);
    // showViewData(dataPosts);
};

const displayData = (dataAll) => {
    // console.log(dataAll);
    const cardsContainer = document.getElementById('cards-container');
    
    
    // showViewData();
    const position = document.getElementById('position');
    // console.log(position)

    const timeOut1 = setTimeout(() => {
        dataAll.forEach(element => {
            // console.log(element);
            
            spinnerOfCard1.classList.add('hidden');
    
            const divForCard1 = document.createElement('div');
            divForCard1.innerHTML = `
        <div class="border-2 bg-[#F3F3F5] w-auto lg:w-[48rem] flex flex-col lg:flex-row gap-6 py-10 px-8 rounded-3xl">
        <div class="relative h-fit w-fit p-4">
            <img src="${element.image}" alt="" class="w-24 h-20 rounded-xl">
            <p id="position" class="w-3 h-3 bg-red-500 rounded-full absolute top-3 right-3"></p>
        </div>
    
        <div>
            <p class="mb-4 text-[#12132DCC] text-sm"><span class="mr-3"># ${element.category}</span> <span>Author : ${element.author.name}</span></p>
            <h5 id="title" class="text-xl font-bold">${element.title}</h5>
            <p class="mt-4 text-base font-normal text-[#12132D99]">
                ${element.description}</p>
    
            <hr class="my-5 w-auto lg:w-[35rem]">
    
            <div class="flex justify-between">
                <div class="flex flex-col lg:flex-row gap-6">
                    <ul class="flex space-x-3">
                        <li><img src="images/Comments.svg" alt="Comments"></li>
                        <li>${element.comment_count}</li>
                    </ul>
                    <ul class="flex space-x-3">
                        <li><img src="images/Views.svg" alt="Comments"></li>
                        <li>${element.view_count}</li>
                    </ul>
                    <ul class="flex space-x-3">
                        <li><img src="images/Duration.svg" alt="Comments"></li>
                        <li>${element.posted_time} mins</li>
                    </ul>
                </div>
                <div>
                    <img onclick="showViewData('title')" src="images/Message.svg" alt="Message" class="hover:cursor-pointer">
                </div>
            </div>
        </div>
        </div>
        `;
    
            cardsContainer.appendChild(divForCard1);
    
            showViewData(element)
        });
    }, 2000);

    
};


const showViewData = (element) => {
    // console.log(element)
    const titleElement = document.getElementById('title');
    const title = titleElement.innerText;
    // element.forEach(e => {
    //     console.log(e)
    // });
    const showView = document.getElementById('Views-content');
    // console.log(showView);

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="bg-white w-fit flex items-center p-4 rounded-2xl mt-8">
        <p class="font-semibold w-auto lg:w-64">${title}</p>
        <p class="flex flex-col lg:flex-row gap-1 lg:gap-3">
            <span><img src="images/Views.svg" alt="Views"></span>
            <span>1,568</span>
        </p>
    </div>
    `;
    showView.appendChild(div);
};

// showViewData();
showProductionOfCard1();



// 
const spinnerOfCard2 = document.getElementById('spinner-2');

const showCommentOfCard2 = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const comments = data[0];
    console.log(comments);

    const commentCardContainer = document.getElementById('comment-card-container');
    
    // console.log(commentCardContainer)

    const timeOut2 = setTimeout(() => {
        data.forEach(element2 => {
            spinnerOfCard2.classList.add('hidden');
            // console.log(element2)
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="border-2 rounded-3xl w-80 p-6 space-y-6">
            <img src="${element2.cover_image}" alt="" class="h-40 rounded-xl mx-auto">
            <div>
                <p class="flex gap-3">
                    <span><img src="images/Date icon.svg" alt="Date icon"></span>
                    <span class="text-sm text-[#12132D99]">${element2.author.posted_date}</span>
                </p>
    
                <h6 class="font-bold mt-3 mb-3">${element2.title}</h6>
                <p class="text-[#12132D99]">${element2.description}</p>
    
                <div class="mt-3 flex gap-3">
                    <img src="${element2.profile_image}" alt="" class="w-14 h-14 rounded-full">
                    <ol>
                        <li class="font-bold">${element2.author.name}</li>
                        <li class="text-[#12132D99] text-sm">${element2.author.designation}</li>
                    </ol>
                </div>
            </div>
            </div>
            `;
            commentCardContainer.appendChild(div);
        });
    }, 2000);
    
};

showCommentOfCard2();