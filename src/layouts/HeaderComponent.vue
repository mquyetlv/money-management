<template>
    <div class="h-[90px] flex justify-between items-center bg-[#fff] px-10">
        <div class="flex items-center">
            <div class="bg-[var(--primary-color)] font-black text-[#fff] text-[30px] w-[50px] h-[50px] flex justify-center items-center rounded-2xl">M</div>
            <span class="inline-block ml-3 text-xl font-semibold">Management</span>
        </div>

        <div class="side-right flex items-center">
            <input type="text" placeholder="Search" class="bg-[var(--background-color)] rounded-full outline-none text-sm px-4 py-2 mr-5 w-72">

            <span class="icon mr-5 text-2xl cursor-pointer">
                <ion-icon name="notifications-outline"></ion-icon>
            </span>

            <img 
                src="https://gamek.mediacdn.vn/133514250583805952/2024/4/8/avatar-the-last-airbender-1712549231981-1712549232285306891728.jpg" 
                alt="Avatar"
                class="w-[60px] h-[60px] rounded-[50%] object-cover"
            />
        </div>
    </div>
</template>