// const showTooltip = document.getElementById('tooltip');
// console.log(showTooltip);


// 
const showProductionOfCard1 = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts?category=coding');
    const data = await res.json();
    const dataPosts = data.posts;
    console.log(dataPosts[0].image)

    const cardsContainer = document.getElementById('cards-container');

    const divForCard1 = document.createElement('div');
    divForCard1.innerHTML = `
    <div class="border-2 bg-[#F3F3F5] w-auto lg:w-[48rem] flex flex-col lg:flex-row gap-6 py-10 px-8 rounded-3xl">
    <div class="relative h-fit w-fit p-4">
        <img src="${dataPosts[0].image}" alt="" class="w-24 h-20 rounded-xl">
        <p class="w-3 h-3 bg-red-500 rounded-full absolute top-3 right-3"></p>
    </div>

    <div>
        <p class="mb-4 text-[#12132DCC] text-sm"><span># ${dataPosts[0].category}</span> <span>Author : ${dataPosts[0].author.name}</span></p>
        <h5 class="text-xl font-bold">10 Kids Unaware of Their Halloween Costume</h5>
        <p class="mt-4 text-base font-normal text-[#12132D99]">
            It's one thing to subject yourself to ha Halloween costume mishap because,
            hey that's your prerogative</p>

        <hr class="my-5">

        <div class="flex justify-between">
            <div class="flex flex-col lg:flex-row gap-6">
                <ul class="flex space-x-3">
                    <li><img src="images/Comments.svg" alt="Comments"></li>
                    <li>560</li>
                </ul>
                <ul class="flex space-x-3">
                    <li><img src="images/Views.svg" alt="Comments"></li>
                    <li>1,568</li>
                </ul>
                <ul class="flex space-x-3">
                    <li><img src="images/Duration.svg" alt="Comments"></li>
                    <li>5 mins</li>
                </ul>
            </div>
            <div>
                <img src="images/Message.svg" alt="Message" class="">
            </div>
        </div>
    </div>
    </div>
    `;

    cardsContainer.appendChild(divForCard1);
};
showProductionOfCard1();