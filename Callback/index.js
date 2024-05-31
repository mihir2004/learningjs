
function getData(dataID, getNextData){
    setTimeout(()=>{
        console.log(dataID);
        if(getNextData){
            getNextData();
        }
        
    },2000);
};

    getData(1,()=>{
        getData(2);
    });

