document.addEventListener("DOMContentLoaded", function () {
    const players = [
        {
            id: 1,
            name: "Rohit Sharma",
            role: "Batsman",
            runs: 3974,
            centuries: 5,
            halfCenturies: 29,
            matches: 151,
            StrikeRate:140.0,
            img: "446755172_351778967578178_5373968349929072086_n-2024-05-c08b217e82f01221db0de8249a552617-removebg-preview.png",
            video: "Rohit Sharma - Top Run-Scorer _ ICC Cricket World Cup 2019 _ Best Bits.mp4"
        },
        {
            id: 1,
            name: "Virat Kohli",
            role: "Batsman",
            runs: 4037,
            wickets: 0,
            centuries: 1,
            halfCenturies: 37,
            StrikeRate:138.15,
            matches: 117,
            img: "GM8yon4WUAEF5LU.jpg",
            video: "Y2meta.app - Virat Kohli takes India to the Final _ T20 World Cup 2014.mp4"
        },
        {
            name: "Yashasvi Jaiswal",
            role: "Batsman",
            runs: 502,
            wickets: 0,
            centuries: 1,
            halfCenturies: 4,
            StrikeRate:161.93,
            matches: 17,
            img: "yashasvi-jaiswal.avif",
            video: "Yashasvi Jaiswal & Surya's Audacious Partnership At a High-Altitude Ground _ SA v IND 3rd T20I.mp4"
        },
        {
            name: "Suryakumar Yadav",
            role: "Batsman",
            runs: 2141,
            wickets: 0,
            centuries: 4,
            halfCenturies: 17,
            StrikeRate:171.6,
            matches: 57,
            img: "BB1njgwn-removebg-preview.png",
            video: "Suryakumar Yadav Batting _ Top 360° Sixes by Suryakumar Yadav _ Unbelievable Knocks by Sky #IPL2024.mp4"
        },
        {
            name: "Sanju Samson",
            role: "Batsman",
            runs: 374,
            wickets: 0,
            centuries: 5,
            halfCenturies: 1,
            StrikeRate:133.1,
            matches: 22,
            img: "446527805_813662930702840_7162844778553404643_n-2024-05-a532d0778af4d3634e634cdbda4dc6bb-removebg-preview.png",
            video: "HLTS_ Sanju Samson Charges to his Maiden ODI Ton _ SA v IND 3rd ODI.mp4"
        },
        {
            name: "Rishabh Pant",
            role: "Wicketkeeper",
            runs: 987,
            wickets: 0,
            centuries: 0,
            halfCenturies: 3,
            StrikeRate:126.4,
            matches: 56,
            img: "446809878_978051633566800_7398785070188331459_n-2024-05-94385579247b3d3b790e3ec44844e31a-removebg-preview.png",
            video: "Rishabh Pant 125_(113) _ India Vs England 3rd ODI 2022 _ Extended Highlights..mp4"
        },
        {
            name: "Hardik Pandya",
            role: "All-rounder",
            runs: 1348,
            wickets: 73,
            centuries: 0,
            halfCenturies: 3,
            StrikeRate:139.8,
            matches: 71,
            img: "[removal.ai]_68480949-15bf-40aa-afb1-4a7d6ed94ddf_446618214_736607915079757_7708770459679260517_n-2024-05-d1a4210ac6d253928ef70a1780d55593.png",
            video: "Hardik Pandya's Breathtaking 45 Runs _ Ind Vs NZ _ Highlights _ Prime Video India.mp4"
        },
        {
            name: "Shivam Dube",
            role: "All-rounder",
            runs: 276,
            wickets: 8,
            centuries: 0,
            halfCenturies: 3,
            StrikeRate:145.3,
            matches: 14,
            img: "[removal.ai]_77f809a0-6d7a-45a9-ac79-b1d2daa46184-gov7yp1bgaejdoa-2024-05-1bd6284bcbd7510593a39472f82d6092.png",
            video: "Y2meta.app - Virat Kohli takes India to the Final _ T20 World Cup 2014.mp4"
        },
        {
            name: "Ravindra Jadeja",
            role: "All-rounder",
            runs: 480,
            wickets: 53,
            centuries: 0,
            halfCenturies: 6,
            matches: 36,
            StrikeRate:125.3,
            img: "[removal.ai]_0257239c-c947-4a11-bc6d-ae468e09a33b-images-1.png",
            video: "Ravindra Jadeja - The Dream All Rounder - Highlights - watch in 4K.mp4"
        },
        {
            name: "Yuzvendra Chahal",
            role: "Bowler",
            runs: 6,
            wickets: 96,
            centuries: 0,
            halfCenturies: 0,
            StrikeRate:18.3,
            matches: 80,
            img: "[removal.ai]_dbe30d84-8b08-4b07-b938-72b3d581ffac_yuzvendra-chahal.png",
            video: "Yuzvendra Chahal 4 wickets vs England _ 2nd ODI, England vs India.mp4"
        },
        {
            name: "Axar Patel",
            role: "All-rounder",
            runs: 361,
            wickets: 49,
            centuries: 0,
            halfCenturies: 1,
            StrikeRate:144.40,
            matches: 52,
            img: "331164.webp",
            video: "Axar Patel Batting Heroics _ 64 Runs Off 35 Balls! _ West Indies v India.mp4"
        },
        {
            name: "Kuldeep Yadav",
            role: "Bowler",
            runs: 46,
            wickets: 59,
            centuries: 0,
            halfCenturies: 0,
            StrikeRate:14.10,
            matches: 35,
            img: "[removal.ai]_ab797843-fc14-42e8-a09f-b30c6a7ac61f-images.png",
            video: "Kuldeep Yadav's 5_25 _ Super11 Asia Cup 2023 _ India vs Pakistan.mp4"
        },
        {
            name: "Arshdeep Singh",
            role: "Bowler",
            runs: 34,
            wickets: 62,
            centuries: 0,
            halfCenturies: 0,
            StrikeRate:14.5,
            matches: 44,
            img: "[removal.ai]_38f09540-c7a7-4470-95b2-7022b51b84bd-1717161651824_bumrah_siraj_arshdeep_t20worldcup_headshot-min.png",
            video: "Arshdeep Singh's Record Breaking Fifer from 1st ODI _ SA vs IND.mp4"
        },
        {
            name: "Jasprit Bumrah",
            role: "Fast-Bowler",
            runs: 8,
            wickets: 74,
            centuries: 0,
            halfCenturies: 0,
            StrikeRate:17.9,
            matches: 62,
            img: "[removal.ai]_50a2dfdc-4adb-4b83-864d-1440c18e8416-1717161651824_bumrah_siraj_arshdeep_t20worldcup_headshot-min.png",
            video: "Every Jasprit Bumrah wicket at Cricket World Cup 2023.mp4"
        },
        {
            name: "Mohammed Siraj",
            role: "Bowler",
            runs: 7,
            wickets: 12,
            centuries: 0,
            halfCenturies: 0,
            StrikeRate:19.0,
            matches: 10,
            img: "[removal.ai]_ca597e04-6860-416b-9b70-ccc9361951bc-1717161651824_bumrah_siraj_arshdeep_t20worldcup_headshot-min.png",
            video: "Mohammed Siraj's 6_21 _ Super11 Asia Cup 2023 _ Final _ India vs Sri lanka.mp4"
        }
    ];

    const playerList = document.querySelector(".player-list");
    const playerAnimation = document.getElementById("player-animation");
    const playerPic = document.getElementById("player-pic");
    const teamLogo = document.getElementById("team-logo");
    const playerName = document.getElementById("player-name");
    const playerRole = document.getElementById("player-role");
    const playerRuns = document.getElementById("player-runs");
    const playerWickets = document.getElementById("player-wickets");
    const playerCenturies = document.getElementById("player-centuries");
    const playerHalfCenturies = document.getElementById("player-half-centuries");
    const playerMatches = document.getElementById("player-matches");
    const playerStrikeRate = document.getElementById("player-strikeRate");
    const playerDetailsModal = document.getElementById("player-details");

    players.forEach(player => {
        const playerCard = document.createElement("div");
        playerCard.className = "player-card";
        playerCard.id = `player-${player.id}`; // Assign a unique ID
        playerCard.innerHTML = `
            <img src="${player.img}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>${player.role}</p>
        `;
        playerCard.addEventListener("click", () => showPlayerDetails(player));
        playerList.appendChild(playerCard);
    });

    function showPlayerDetails(player) {
        playerName.textContent = player.name;
        playerRole.textContent = `Role: ${player.role}`;
        playerRuns.textContent = `Runs: ${player.runs}`;
        playerWickets.textContent = `Wickets: ${player.wickets}`;
        playerCenturies.textContent = `Centuries: ${player.centuries}`;
        playerHalfCenturies.textContent = `Half Centuries: ${player.halfCenturies}`;
        playerMatches.textContent = `Matches: ${player.matches}`;
        playerStrikeRate.textContent = `Strike Rate: ${player.strikeRate}`;

        playerPic.src = player.img;
        teamLogo.src = "download-removebg-preview copy.png";
        playerAnimation.src = player.video;
        playerDetailsModal.style.display = "block";
    }

    const closeModal = document.querySelector(".close");

    closeModal.addEventListener("click", () => {
        playerDetailsModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === playerDetailsModal) {
            playerDetailsModal.style.display = "none";
        }
    });
});
