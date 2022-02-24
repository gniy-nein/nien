Menu = ["bingsumango", "chomuang", "cleasoup", "cocoicecream", "cocojelly", "coke", "crabcurry", "gaiyang",
    "greencurry", "kanomtuay", "kaosoi", "khakai", "khamuu", "krapao", "krapi", "limesoda", "mangosticky", "massaman",
    "melonjuice", "pineapplesm", "porkrice", "purewater", "shrimpfriedrice", "somtum", "thaimilktea", "tomyum"]

Price = [150, 200, 100, 60, 90, 80, 140, 130, 160, 152, 123, 102, 20, 36, 50, 12, 32, 153, 30, 45, 120, 130, 150, 140, 160, 90]

MenuPic = ["banner.png", "bingsumango.jpg", "chomuang.jpg", "cleasoup.jpg", "cocoicecream.jpg", "cocojelly.jpg", "coke.jpg", "crabcurry.jpg", "gaiyang.jpg",
    "greencurry.jpg", "kanomtuay.jpg", "kaosoi.jpg", "khakai.jpg", "khamuu.jpg", "krapao.jpg", "krapi.jpg", "limesoda.jpg", "mangosticky.jpg", "massaman.jpg",
    "melonjuice.jpg", "pineapplesm.jpg", "porkrice.jpg", "purewater.jpg", "shrimpfriedrice.jpg", "somtum.jpg", "thaimilktea.jpg", "tomyum.jpg"]

function showMenu() {
    myMenu = document.getElementById("menu");
    for (let index = 0; index < Menu.length; index++) {
        div = document.createElement("div");
        div.setAttribute("class", "gallery");

        image = document.createElement("img");
        image.setAttribute("src", "pic/" + MenuPic[index + 1]);
        image.setAttribute("class", "w3-round w3-image w3-opacity-min");
        image.setAttribute("width", "600px");
        image.setAttribute("height", "400px");

        div2 = document.createElement("div");
        div2.setAttribute("class","desc");
        div2.innerHTML = Menu[index] + "<br>" + Price[index] + "Baht";

        amount = document.createElement("input");
        amount.setAttribute("type","number");
        div2.appendChild(amount);

        div.appendChild(image);
        div.appendChild(div2);
        myMenu.appendChild(div)
    }

}