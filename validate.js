function validateForm() {
    // 1. ดึงค่าจากฟอร์ม
    let nid = document.getElementById("nid").value.trim();
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let workDays = document.getElementById("workDays").value.trim();
    let school = document.getElementById("school").value;
    let year = document.getElementById("year").value;
    
    // ดึงค่า Radio Button ของ Gender
    let genderOptions = document.getElementsByName("genderRad");
    let genderSelected = false;
    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            genderSelected = true;
            break;
        }
    }

    // 2. ตรวจสอบว่ากรอกข้อมูลครบทุกช่องหรือไม่ [cite: 139, 141]
    if (nid === "" || fname === "" || lname === "" || workDays === "" || !genderSelected) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return false;
    }

    // 3. ตรวจสอบ National ID: ต้องเป็นตัวเลขทั้งหมดและมี 13 หลัก [cite: 140]
    if (isNaN(nid) || nid.length !== 13) {
        alert("หมายเลขบัตรประชาชนต้องเป็นตัวเลข 13 หลักเท่านั้น");
        document.getElementById("nid").focus();
        return false;
    }

    // 4. ตรวจสอบจำนวนวันที่ทำงาน: 1 ถึง 6 วันเท่านั้น [cite: 142]
    let days = parseInt(workDays);
    if (isNaN(days) || days < 1 || days > 6) {
        alert("จำนวนวันที่ทำงานต้องอยู่ระหว่าง 1 ถึง 6 วัน");
        document.getElementById("workDays").focus();
        return false;
    }

    // 5. หากผ่านการตรวจสอบ ให้คำนวณและแสดงผล 
    let total = payRateCalculate();
    alert("Your weekly pay rate is " + total + " THB");
    
    return false; // คืนค่า false เพื่อให้หน้าจอไม่ Refresh และแสดง Popup ได้
}