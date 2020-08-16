function main() {
    const baseUrl = "https://api.jikan.moe/v3";
    const gettop = () => {
        fetch(`${baseUrl}/top/anime`)
         .then(response => {
             return response.json();
         })
         .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAlltops(responseJson.top);
            }
         })
         .catch(error => {
             showResponseMessage(error);
         })
    };
    const renderAlltops = (tops) => {
        const listtopElement = document.querySelector("#listtop");
        listtopElement.innerHTML = "";

        tops.forEach(top => {
            listtopElement.innerHTML += `
                <tr>
                    <td rowspan="3">${top.rank}</td>
                    <td rowspan="3"><img src="${top.image_url}"></td>
                    <td class="detail"><a href="${top.url}">${top.title}</a></td>
                    <td rowspan="3">${top.score}</td>    
                </tr>
                <tr>
                    <td class="detail">${top.start_date} - ${top.end_date}</td>
                </tr>
                <tr>
                    <td class="detail">${top.episodes} Episodes</td>
                </tr>  
            `;
        });   
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        gettop();
    });
}

export default main;