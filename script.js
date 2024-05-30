const students = {
    1: {name: "Student 1", group: 1, points: 0},
    2: {name: "Student 2", group: 2, points: 0},
    3: {name: "Student 3", group: 3, points: 0},
    4: {name: "Student 4", group: 4, points: 0},
    // Přidejte další studenty s unikátními ID
};

const groups = {
    1: {name: "Skupina 1", points: 0},
    2: {name: "Skupina 2", points: 0},
    3: {name: "Skupina 3", points: 0},
    4: {name: "Skupina 4", points: 0},
    // Přidejte další skupiny, pokud je potřeba
};

function updatePoints(studentId, change) {
    students[studentId].points += change;
    document.querySelector(`[data-student="${studentId}"] .points`).innerText = students[studentId].points;
    updateLeaderboard();
}

function updateLeaderboard() {
    const individualLeaderboard = document.getElementById("individualLeaderboard");
    const teamLeaderboard = document.getElementById("teamLeaderboard");

    // Seřadit studenty podle bodů
    const sortedStudents = Object.values(students).sort((a, b) => b.points - a.points);

    // Aktualizace pořadí jednotlivců
    individualLeaderboard.innerHTML = "";
    sortedStudents.forEach(student => {
        const li = document.createElement("li");
        li.innerText = `${student.name} - ${student.points} bodů`;
        individualLeaderboard.appendChild(li);
    });

    // Aktualizace bodů skupin
    for (const groupId in groups) {
        groups[groupId].points = 0;
    }
    sortedStudents.forEach(student => {
        groups[student.group].points += student.points;
    });

    // Seřadit skupiny podle bodů
    const sortedGroups = Object.values(groups).sort((a, b) => b.points - a.points);

    // Aktualizace pořadí týmů
    teamLeaderboard.innerHTML = "";
    sortedGroups.forEach(group => {
        const li = document.createElement("li");
        li.innerText = `${group.name} - ${group.points} bodů`;
        teamLeaderboard.appendChild(li);
    });
}
