var array1=[];
function sorting()
{
    var inputs=[];
    for (var i=1; i<=6; i++)
    {
        inputs.push(document.getElementById("name_of_the_student_"+i).value);
    }
    console.log(inputs);
    var remove=inputs.join(" ");
    document.getElementById("display_name_with_commas").innerHTML=remove;
}
function submit()
{
    var inputs2=[];
    for (var i=1; i<=6; i++)
    {
        inputs2.push(document.getElementById("name_of_student_"+i).value);
    }
    console.log(inputs2);
    var remove2=inputs2.join(" ");
    document.getElementById("display_name_with_commas").innerHTML=remove2;
}