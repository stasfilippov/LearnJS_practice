function showNotification({top = 0, right = 0, className, html}) {
    const notify = document.createElement('div');
    notify.className = "notification";

    notify.classList.add(className);

    notify.style.top = top + 'px';

    notify.style.right = right + 'px';

    notify.innerHTML = html;

    document.body.append(notify);

    setTimeout(() => notify.remove(), 1500);
}

let i = 1;
// setInterval(() => {
//     showNotification({
//     top: 10,
//     right: 10,
//     html: 'Hello ' + i++,
//     className: "welcome"
//     });
// }, 2000);