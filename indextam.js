import { tracks } from './quranlist-tam.js';
// ----------------variables---------------
const currentTrackImage = document.querySelector('header img');
const currentTrackName = document.querySelector('header h2');
const currentTrackDesc = document.querySelector('header p');
const currentTrackAudio = document.querySelector('audio');
const currentTrackPrevious = document.querySelector('.event-prev');
const currentTrackPlayPause = document.querySelector('.event-playpause');
const currentTrackNext = document.querySelector('.event-next');
const currentTrackMuteUnmute = document.querySelector('.event-muteunmute');
let currentTiming = document.querySelector('.count-current');
let trackDuration = document.querySelector('.count-final');
const progress = document.querySelector('.slider-progress');
const findMin = document.querySelector("input#find-min");
const findSec = document.querySelector("input#find-sec");
const autoplay =  document.getElementById('auto-Play');


let input = document.querySelector('#input-value');
let search = document.querySelector('.search-div button');

let footer = document.querySelector("footer");

trackDuration.innerHTML = '--:--';
// ----------------variables---------------

document.addEventListener('DOMContentLoaded', () => {
   function test(){
    
    console.log(text);
   }
   
   
   
   
    autoPlay()
    
    function autoPlay() {

        autoplay.addEventListener('change', e => {
            if (e.target.checked) {
               
            
                let text = document.getElementById('auto-Play').setAttribute("data-check",1)
                console.log("Auto play On")
            }
        })
    }

    // Theme function

    function theme1() {

        document.querySelector('.event').style.color = "#fbffa3";
        document.querySelector('.finder-btn').style.color = "#fbffa3";
        document.querySelector('.count-current').style.color = "#fbffa3";
        document.querySelector('header h2').style.color = "#fbffa3";
        document.querySelector('header p').style.color = "#c6e872";
        document.querySelector('.small-container').style.color = "#fbffa3";
        document.querySelector('.count').style.color = "#fbffa3";



        document.querySelector('body').style.background = "#083836";
        document.querySelector('.search-div input ').style.background = "#083836";
        document.querySelector('.search-div button').style.background = "#083836";
        document.querySelector('.slider-progress ').style.background = "#ac3f21";
        document.querySelector('footer').style.background = "#0D9B50";


        document.querySelector('footer').style.boxShadow = "0px 0px 5px #ffd717";
        document.querySelector('#playlist-label').remove('::before');
    }
    // theme1() 


    function theme2() {
        document.querySelector('body').style.background = "#333644";
        document.querySelector('header h2').style.color = "#f6e1b8";
        document.querySelector('header p').style.color = "#c65f63";
        document.querySelector('.small-container').style.color = "#f6e1b8";
        document.querySelector('.count').style.color = "#f6e1b8";
        document.querySelector('.search-div input ').style.background = "#333644";
        document.querySelector('.search-div button').style.background = "#333644";
        document.querySelector('.event').style.color = "#f6e1b8";
        document.querySelector('.finder-btn').style.color = "#f6e1b8";
        document.querySelector('.input').style.color = "#f6e1b8";
        document.querySelector('.count-current').style.color = "#f6e1b8";
        document.querySelector('footer').style.boxShadow = "0px -2px 100px #c65f63";
        document.querySelector('footer').style.color = "#84577c";
        document.querySelector('footer').style.background = "#3E3636";
        document.querySelector('.slider-progress ').style.background = "#c65f63";
        document.querySelector('#playlist-label').remove('::before');
    }
    // theme2() 


    function theme3() {

        document.querySelector('.event').style.color = "#f6e1b8";
        document.querySelector('.finder-btn').style.color = "#f6e1b8";
        document.querySelector('.input').style.color = "#f6e1b8";
        document.querySelector('footer').style.color = "#84577c";
        document.querySelector('.count-current').style.color = "#f6e1b8";
        document.querySelector('header h2').style.color = "#f6e1b8";
        document.querySelector('header p').style.color = "#ffd717";
        document.querySelector('.small-container').style.color = "#f6e1b8";
        document.querySelector('.count').style.color = "#f6e1b8";



        document.querySelector('body').style.background = "#001f3f";
        document.querySelector('.search-div input ').style.background = "#001f3f";
        document.querySelector('.search-div button').style.background = "#001f3f";
        document.querySelector('.slider-progress ').style.background = "#c65f63";
        document.querySelector('footer').style.background = "#083358";


        document.querySelector('footer').style.boxShadow = "0px 0px 5px #ffd717";
        document.querySelector('#playlist-label').remove('::before');
    }
    // theme3()

    function theme4() {

        document.querySelector('.event').style.color = "#f2f2f2";
        document.querySelector('.finder-btn').style.color = "#f2f2f2";
        document.querySelector('.input').style.color = "#f2f2f2";
        document.querySelector('footer').style.color = "#84577c";
        document.querySelector('.count-current').style.color = "#f2f2f2";
        document.querySelector('header h2').style.color = "#f2f2f2";
        document.querySelector('header p').style.color = "#f96d00";
        document.querySelector('.small-container').style.color = "#f2f2f2";
        document.querySelector('.count').style.color = "#f2f2f2";



        document.querySelector('body').style.background = "#222831";
        document.querySelector('.search-div input ').style.background = "#222831";
        document.querySelector('.search-div button').style.background = "#222831";
        document.querySelector('.slider-progress ').style.background = "#f96d00";
        document.querySelector('footer').style.background = "#393e46";


        document.querySelector('footer').style.boxShadow = "0px -5px 200px #f96d00";
        document.querySelector('#playlist-label').remove('::before');
    }
    // theme4()

    function themeChanger() {







    }

    function closeTrigger() {
        let closeBtn = document.querySelector('.close-trigger');

        closeBtn.addEventListener('click', () => {

            emptyContainer()
        })
    }

    function emptyContainer() {
        document.querySelector('#theme-container').innerHTML = "";
    }


    let themeImg = document.querySelector('#theme-logo')

    themeImg.addEventListener('click', () => {
        console.log("testing", themeImg)
        document.querySelector('#theme-container').innerHTML = `
    <div id="theme-div">
    <div class="close-trigger"><i class="fa fa-times" aria-hidden="true"></i></div>
    <span data-id="1" class="theme-select"><img src="./themes/dark Theme.png" class="theme-img" alt="">
        <p><small>Leaf </small></p>
    </span>
    <span data-id="2" class="theme-select"><img src="./themes/theme1.png" class="theme-img" alt="">
        <p><small>Blush</small></p>
    </span>
    <span data-id="3" class="theme-select"><img src="./themes/theme2.png" class="theme-img" alt="">
        <p><small>Ocean </small></p>
    </span>
    <span data-id="4" class="theme-select"><img src="./themes/theme3.png" class="theme-img" alt="">
        <p><small>Sunny</small></p>
    </span>

</div>
    
    `;

        closeTrigger()

        // document.querySelector('.theme-select').addEventListener('click',() => {
        //     console.log('working');
        //     });
        selectTheme()
    })


    function selectTheme() {

        let images = document.getElementsByClassName('theme-select');
        console.log(images);
        for (let image of images) {
            image.addEventListener('click', function () {
                let atributeValue = parseInt(image.getAttribute('data-id'));

                switch (atributeValue) {
                    case 1:
                        console.log(1);
                        theme1()
                        break;
                    case 2:
                        console.log(2);
                        theme2();
                        break;
                    case 3:
                        console.log(3);
                        theme3();
                        break;
                    case 4:
                        console.log(4);
                        theme4();
                        break;
                }

            });
        }




    }


    let refreshButton = document.querySelector('#refresh-button');
    refreshButton.style.visibility = 'hidden';


    search.addEventListener('click', () => {

        let playlist = document.querySelector('ul#ul-of-listTags');
        playlist.innerHTML = "";

        let searchingVar = input.value;
        if (searchingVar == "" || searchingVar == undefined) {
            for (let track of tracks) {
                pushList(playlist, track);
            }
            return;
        }


        let allLowerCase = searchingVar.toLowerCase();

        for (let track of tracks) {
            let trackName = track.name;
            trackName = trackName.toLowerCase();
            if (trackName.search(allLowerCase) > 0) {
                pushList(playlist, track);
            }
        }
        refreshingMov()

    })

    function refreshingMov() {
        document.querySelector('#playlist-label').style.visibility = 'hidden';
        refreshButton.style.visibility = 'visible';


    }

    refreshButton.addEventListener('click', () => {
        let playlist = document.querySelector('ul#ul-of-listTags');
        for (let track of tracks) {
            pushList(playlist, track);
        }
        input.value = "";
        document.querySelector('#playlist-label').style.visibility = 'visible';
        refreshButton.style.visibility = 'hidden';
    })

    function refreshPage() {
        window.location.reload();
    }


    function pushList(root, trackedValue) {
        let li = document.createElement('li');
        li.id = trackedValue.id;
        li.style = 'cursor:pointer';
        li.innerHTML = `
                            <div class="mini-container">
                            <div class="row hrStyle" id="rowtargeted">
                                <div class="col-1">
                                    <span class="track-numberv">${trackedValue.id}</span>
                                    <img src=${trackedValue.coverSrc} alt="track-image" class="track-image" />
                                </div>
                                <div class="col-2">

                                    <p class="track-deta-name">${trackedValue.name}</p>
                                    <p class="track-deta-desc"><small>${trackedValue.desc}</small></p>
                                    
                                      
                                </div>
                            </div>
                        </div> `;

        root.appendChild(li);
        (function (id) {
            li.addEventListener(
                'click', () => {
                    playSelectedTrack(id);
                    
                    footer.style.visibility="visible";

                },
                false
            );
        })(trackedValue.id);
    }














    let tracklist = tracks;

    // adding playlist to page

    (function addPlaylist() {
        for (let track of tracklist) {
            pushList(document.querySelector('ul'), track);
        }
    })();



    let trackId = 0;

    const loadTrack = (songId) => {

        const song = tracklist.find((track) => track.id == songId);

        const { audioSrc, coverSrc, name, desc } = song;
        currentTrackName.innerText = name;
        currentTrackDesc.innerText = desc;
        currentTrackAudio.src = audioSrc;
        currentTrackImage.src = coverSrc;
    };

    // loadTrack(trackId);
    const playTrack = () => {
        currentTrackPlayPause.classList.remove('fa-play');
        currentTrackPlayPause.classList.add('fa-pause');

        currentTrackAudio.play();
    }




    const pauseTrack = () => {
        currentTrackPlayPause.classList.add('fa-play');
        currentTrackPlayPause.classList.remove('fa-pause');

        currentTrackAudio.pause();
    }

    const playSelectedTrack = (songId) => {
        trackId = songId;
        loadTrack(songId);
        initFindMaxValues();
        playTrack();

    };


    function initFindMaxValues() {
        findMin.value = 0;
        findSec.value = 0;
        findMin.removeAttribute('max');
        findSec.removeAttribute('max');
    }





    const previousTrack = () => {
        trackId--;

        if (trackId < 0) {
            trackId = tracklist.length - 1;
        }
        loadTrack(trackId);
        playTrack();
    }



    const nextTrack = () => {
        trackId++;

        if (trackId > tracklist.length - 1) {
            trackId = 0;
        }
        loadTrack(trackId);
        playTrack();
    }




    const muteUnmuteTrack = () => {
        if (currentTrackAudio.muted) {
            currentTrackAudio.muted = false;
            currentTrackMuteUnmute.classList.remove('fa-volume-down')
            currentTrackMuteUnmute.classList.add('fa-volume-up')
        } else {
            currentTrackAudio.muted = true;
            currentTrackMuteUnmute.classList.add('fa-volume-down')
            currentTrackMuteUnmute.classList.remove('fa-volume-up')

        }

    }

    function getAudioDuration() {
        let trackDurationValue = currentTrackAudio.duration;
        let minute = Math.floor(trackDurationValue / 60);
        let second = Math.round(trackDurationValue % 60);

        minute = isNaN(minute) ? 0 : minute;
        second = isNaN(second) ? 0 : second;
        return {
            min: minute,
            sec: second
        }
    }




    const updateProgress = () => {
        let text = document.getElementById('auto-Play').getAttribute("data-check");
        let currentTimingValue = currentTrackAudio.currentTime;
        let trackDurationValue = currentTrackAudio.duration;

        const percent = (currentTimingValue / trackDurationValue) * 100;
        // console.log(percent);
        progress.style.width = percent + '%';



        // autoplay.addEventListener('change', a => {
        //     if (a.target.checked) {
          
        //         text = 1 ;
           
        //     }
        // })

        if (percent == 100) {

            if(text == 0){
                console.log('Auto play OFF');
            }else if(text == 1){
                nextTrack();
            }
        }
        // console.log("check 2",text);
    






        let curMin = Math.floor(currentTimingValue / 60);
        let curSecs = Math.floor(currentTimingValue - curMin * 60);
        let durMins = Math.floor(trackDurationValue / 60);
        let durSecs = Math.floor(trackDurationValue - curSecs * 60);


        if (curMin < 10) {
            curMin = `0${curMin}`;
        }
        if (curSecs < 10) {
            curSecs = `0${curSecs}`;
        }
        if (durMins < 10) {
            durMins = `0${durMins}`;
        }
        if (durSecs < 10) {
            durSecs = `0${durSecs}`;
        }

        // currentTiming.innerText =  Math.round(currentTimingValue);
        currentTiming.innerText = `${curMin}:${curSecs}`;
        let audioDuration = getAudioDuration();


        document.querySelector("input#find-min").setAttribute("max", audioDuration.min);
        document.querySelector("input#find-sec").setAttribute("max", audioDuration.sec);
        trackDuration.innerHTML = `${audioDuration.min}:${audioDuration.sec}`;


    };

    currentTrackPlayPause.addEventListener('click', () => {
        const currentlyPlaying = currentTrackPlayPause.classList.contains('fa-pause');

        currentlyPlaying ? pauseTrack() : playTrack();
    });

    currentTrackMuteUnmute.addEventListener('click', () => muteUnmuteTrack());

    currentTrackPrevious.addEventListener('click', () => previousTrack());
    currentTrackNext.addEventListener('click', () => nextTrack());

    currentTrackAudio.addEventListener('timeupdate', () => updateProgress());




    document.querySelector("button#finder").addEventListener('click', function (e) {
        e.preventDefault();
        let min = Number(findMin.value);
        let sec = Number(findSec.value);

        if(sec%60 > 0){
                min += Math.floor(sec/60);
                sec = sec%60;
        }

        const minuteMax = Number(findMin.getAttribute("max"));
        const secondMax = Number(findSec.getAttribute("max"));
        if (minuteMax < min) {
            alert(`Audio maximum duration is reached. (${minuteMax})`);
            return;
        }

        if ((minuteMax*60)+secondMax < sec) {
            
            alert(`Audio maximum duration is reached. (${secondMax})`);
            return;
        }

        const time = (min * 60) + sec;
        const myAudio = document.querySelector('audio');
        myAudio.currentTime = time;
    });




});

// toggle menu------------------------------
let menu = document.getElementById("more");
let anchor = document.getElementsByClassName("anchor");

for (let i = 0; i < anchor.length; i++) {

    anchor[i].style.display="none";
}
menu.style.maxHeight = "0px";

document.querySelector('img.img-more').addEventListener('click', toggleMenu);

function toggleMenu() {

    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "200px";
        for (let i = 0; i < anchor.length; i++) {
            anchor[i].style.display="";
            anchor[i].style.color = "black";
        }

    } else {

        menu.style.maxHeight = "0px"
        for (let i = 0; i < anchor.length; i++) {
            anchor[i].style.display="none";
            anchor[i].style.color = "black";
        }
    }

}



function changeCss() {
    var bodyElement = document.querySelector("body");
    var top = document.querySelector("#move-top");
    this.scrollY < 500 ? top.style.visibility = 'hidden' : top.style.visibility = "visible";
}

window.addEventListener("scroll", changeCss, false);



document.getElementById('move-top').addEventListener('click', function () {
    window.scrollTo(0, 0);



});



