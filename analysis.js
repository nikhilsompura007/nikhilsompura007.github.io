
var globalFile=[];
var tempdisplayfile=[];

function uploadFile()
{
  let x=document.getElementById("upload_file");
  let txt="";
  var file=[];
  file = document.querySelector('input[type=file]').files;
  console.log(file);
  for(i=0;i<file.length;i++)
  {
    FileProcess(file[i]);
  }
  
};

function FileProcess(file)
{
var fr=new FileReader();

fr.addEventListener("load", () => {
    // this will then display a text file
   globalFile= globalFile+ (fr.result);
   
   document.getElementById("result").innerHTML=TableRender(globalFile);
 
  }, false);

  if (file) {
    fr.readAsText(file);
  }


}

function displayResult(file)
{
 let finalresult=file;
 let a=[];
 //console.log("result");
 a=JSON.stringify(finalresult);

}

function FrontEndFilter()
{
  let output=[];
  console.log("hello");
  let filterArray=[];
  filterArray.push(document.getElementById("filterValue").value);
  filterArray.push(document.getElementById("filterValue2").value);
  console.log(filterArray);
  output=FilterValues(filterArray);
  document.getElementById("result").innerHTML=TableRender(output);
}

function TableRender(value)
{
  let tableArray=[];
  let table=[];
  let tablevalue=[];
  tablevalue=value.split('\n');
  table="<table style='color:blue;' border='1px;'>";
  tablevalue.forEach(element=>{
    table=table+"<tr><td>"+element +"</td></tr>"
  });
  table=table+"</table>"
  
  return table;
}

function FilterValues(Filterx)
{
  let FilterText=Filterx;
  let logline=0;
  tempdisplayfile=globalFile.split('\n');
  let displayoutput=[]; 
  tempdisplayfile.forEach(element => {
    
    for(i=0;i<FilterText.length-1;i++)
    { 
     if(FilterText[i]!="")
     {
      console.log("Not NULL")
      if(element.includes(FilterText[i]) && element.includes(FilterText[i+1]))
      {
        displayoutput=displayoutput+element+"\n"; 
        logline=logline+1;   
      }
      else
      {
      }
     }
    }
    document.getElementById("loglines").innerHTML=logline;
  });
  if(displayoutput.length>=1)
  {
    console.log(displayoutput);
    return displayoutput;
  }
  else
  {
   displayoutput="No result Found";
   return displayoutput;
  }
  
}

function dateConvert()
{
 let ecpochtime= document.getElementById("epoch").value;
 if(ecpochtime!="")
{
 let date=new Date(ecpochtime * 1000);
 document.getElementById("datehere").innerHTML=date.toUTCString();
}
else
{
  document.getElementById("datehere").innerHTML="";
}
}
