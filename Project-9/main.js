new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('.title');
        const timeLine = new TimelineMax({delay: 0.5});
        timeLine.fromTo(title, 0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1});

        // Select the second page
        if (destination.index === 1) {
            const chair = document.querySelectorAll('.chair');
            const description = document.querySelector('.description');

            timeLine.fromTo(chair, 0.7, {x: "100%"}, {x: "-70%"})
            .fromTo(description, 0.5, {x: '-120', opacity: 0}, {x: 0, opacity: 1})
            .fromTo(chair[0], 1, {opacity: 1}, {opacity: 1})
            .fromTo(chair[1], 1, {opacity: 0}, {opacity: 1})
            .fromTo(chair[2], 1, {opacity: 0}, {opacity: 1})
        }
    }
}) 