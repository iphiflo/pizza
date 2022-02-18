name_of_students=[];

function submit(){

    var name_1=document.getElemantById("student_1");
    var name_2=document.getElemantById("student_2");
    var name_3=document.getElemantById("student_3");
    var name_4=document.getElemantById("student_4");

    name_of_students.push("name_1");
    name_of_students.push("name_2");
    name_of_students.push("name_3");
    name_of_students.push("name_4");

    console.log ("name_of_students");

    document.getElemantById("display_name").innerHtml="name_of_students";
    document.getElemantById("submit_btn").style.display=none;
    document.getElemantById("sorting_btn").style.display=inline-block;

}

function sorting(){
    name_of_students.sort;
    console.log("name_of_students");
    document.getElemantById("display_name").innerhtml="name_of_students";
}