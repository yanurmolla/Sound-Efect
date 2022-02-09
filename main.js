const songs = ['kabhi' ,'teri' ,'har', 'tum', 'uska' ,'mar']

songs.forEach(song => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
   btn.innerText = song
   stopsongs()

   btn.addEventListener('click',() => {

    document.getElementById(song).play()
   })



   document.getElementById('button').appendChild(btn)

})
 function stopsongs(){
     songs.forEach( song => {
      const soundse = document.getElementById(song)

      soundse.pause()
      soundse.currentTime = 0;
     })
 }