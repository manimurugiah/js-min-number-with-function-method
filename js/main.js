function welcome(){
    var arr=[70,80,90,30,20,50];
    var min=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=min){
            min=arr[i];
        }
    }
    console.log(min);
}
welcome();