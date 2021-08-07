function addstudent()
{
    student_name=document.getElementById("username_1").value;
    localStorage.setItem("username_1",student_name);
    window.location="room.html";
}