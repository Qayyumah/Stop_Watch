// setTimeout(function(){
//     console.log('hello world')}, 5000)


// document.getElementById('btn').addEventListener('click', function(){
//     var inputValue = Number(document.getElementById('inp1').value)
//     var input = document.getElementById('display')
//     input.innerHTML = inputValue
//     var a = setInterval(function(){
        
//         if (input.innerHTML==1) {
//             clearInterval(a)
//         }
        
        
//     input.innerHTML--},1000)
   
// })

//


    var start = document.getElementById('start')
    var stop = document.getElementById('stop')
    var reset = document.getElementById('reset')
   

    var hour = 0
    var minute = 0
    var second = 0
    
    document.getElementById('start').addEventListener('click', function(){
        timer = true
        stopWatch()
    })

    document.getElementById('stop').addEventListener('click', function(){
        timer = false
    })

    document.getElementById('reset').addEventListener('click', function(){
        timer = false
        hour = '0'
        minute = '0'
        second = '0'

        document.getElementById('min').innerHTML = '00'
        document.getElementById('sec').innerHTML = '00'
        document.getElementById('hr').innerHTML = '00'
    })

    function stopWatch (){
        if (timer){
            second++
            if (second == 60) {
                minute++
                second = 0
            }
            if (minute==60) {
                hour++
                minute = 0   
                second = 0
            }
    
            var a = hour
            var b = minute
            var c = second
            
            if (hour < 10) {
                a = '0' +a
            }
            if (b < 10) {
                b = '0' + b
            }
            if (c < 10) {
                c = '0' + c
            }
            document.getElementById('min').innerHTML = a
            document.getElementById('sec').innerHTML = b
            document.getElementById('hr').innerHTML = c
            setTimeout(stopWatch, 1000)
        }
       
    }