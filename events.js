let events = [];

    function showCreateForm() {
        document.getElementById('create-form').style.display = 'block';
    }

    function hideCreateForm() {
        document.getElementById('create-form').style.display = 'none';
    }

    function addEvent() {
        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventTime = document.getElementById('eventTime').value;
        events.push({ name: eventName, date: eventDate, time: eventTime });
        events.sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
        displayEvents();
        hideCreateForm();
    }

    function displayEvents() {
        const eventsContainer = document.getElementById('events-container');
        eventsContainer.innerHTML = '';
        events.forEach((event, index) => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <h3>${event.name}</h3><p>Date:${event.date}</p><p>Time:${event.time}</p><br>
                <button onclick="editEvent(${index})">Update</button>
                <button onclick="deleteEvent(${index})">Delete</button>
            `;
            eventsContainer.appendChild(eventCard);
        });
    }

    function editEvent(index) {
        const event = events[index];
        const eventName = prompt('Enter updated event name:', event.name);
        const eventDate = prompt('Enter updated event date:', event.date);
        const eventTime = prompt('Enter updated event time:', event.time);
        if (eventName && eventDate && eventTime) {
            events[index] = { name: eventName, date: eventDate, time: eventTime };
            events.sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
            displayEvents();
        }
    }

    function deleteEvent(index) {
        events.splice(index, 1);
        displayEvents();
    }

    displayEvents();
