import coconut from "./coconut.svg";

export default function home() {
    const div = document.createElement("div");
    const cocoDiv = document.createElement("div");
    cocoDiv.classList.add("coconut");

    const divH1 = document.createElement("div");
    divH1.classList.add("kiosk");

    const h1 = document.createElement("h1");
    const h1P = document.createElement("p");
    h1.appendChild(h1P);

    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");
    const divUl = document.createElement("div");
    divUl.classList.add("hours");
    divUl.appendChild(h2);
    divUl.appendChild(ul);

    const h2At = document.createElement("h2");
    const h2AtP = document.createElement("p");
    const divAt = document.createElement("div");
    divAt.classList.add("at");
    divAt.appendChild(h2At);
    divAt.appendChild(h2AtP);

    // Add the image to our existing div.
    const myCoconut = new Image();
    myCoconut.src = coconut;

    h1.textContent = "Tropical Kiosk";
    h1P.innerHTML = "This is our simple kiosk by the beach. <br> Come and enjoy our tropical drinks and delicious meals!";

    h2.textContent = "Hours";
    let schedule = [
        { day: "Sunday", time: "10 A.M - 10 P.M", num: 1 },
        { day: "Monday", time: "10 A.M - 10 P.M", num: 2 },
        { day: "Tuesday", time: "10 A.M - 10 P.M", num: 3 },
        { day: "Wednesday", time: "10 A.M - 10 P.M", num: 4 },
        { day: "Thursday", time: "10 A.M - 10 P.M", num: 5 },
        { day: "Friday", time: "12 A.M - 12 P.M", num: 6 },
        { day: "Saturday", time: "12 A.M - 12 P.M", num: 7 },
    ];
    schedule.forEach(day => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        li.classList.add(`day-${day.num}`);
        p.textContent = `${day.day} - ${day.time}`;
        li.appendChild(p);
        ul.appendChild(li);
    });

    h2At.textContent = "At";
    h2AtP.textContent = "Fictional Beach - Somewhere in the world";

    cocoDiv.appendChild(myCoconut);
    cocoDiv.appendChild(h1);

    divH1.appendChild(cocoDiv);
    divH1.appendChild(h1P);

    div.appendChild(divH1);
    div.appendChild(divUl);
    div.appendChild(divAt);

    return div;
}


// <h1>Tropical Kiosk</h1>
// <p>This is our simple kiosk by the beach.<br> Come and enjoy our tropical drinks and delicious meals!</p>
// <h2>Hours</h2>
// <ul>
//     <li>Sunday: 10 A.M - 10 P.M</li>
//     <li>Monday: 10 A.M - 10 P.M</li>
//     <li>Tuesday: 10 A.M - 10 P.M</li>
//     <li>Wednesday: 10 A.M - 10 P.M</li>
//     <li>Thursday: 10 A.M - 10 P.M</li>
//     <li>Friday: 12 A.M - 12 P.M</li>
//     <li>Sunday: 12 A.M - 12 P.M</li>
// </ul>
// <h2>At</h2>
// <p>Fictional Beach - Somewhere in the world</p>