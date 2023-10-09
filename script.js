const routes = {
    404: {
        template: "/pages/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "/pages/home.html",
        title: "Home",
        description: "This is the home page",
    },
    "/about": {
        template: "/pages/about.html",
        title: "About Us",
        description: "This is the about page",
    },
    "/contact": {
        template: "/pages/contact.html",
        title: "Contact Us",
        description: "This is the contact page",
    },
};




document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    route();
});


const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    locationHandler();
};



const locationHandler = async () => {
    const location = window.location.pathname; 
    if (location.length == 0) {
        location = "/";
    }

    const route = routes[location] || routes["404"];

    const html = await fetch(route.template).then((response) => response.text());
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const content = document.getElementById("content");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
      }

    content.appendChild(doc.body);

    document.title = route.title;
 
    document.querySelector('meta[name="description"]').setAttribute("content", `${route.description}`);
};


window.onpopstate = locationHandler;

window.route = route;

locationHandler();