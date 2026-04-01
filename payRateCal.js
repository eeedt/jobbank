function payRateCalculate() {
    let workDays = parseInt(document.getElementById("workDays").value);
    let year = document.getElementById("year").value;
    let rate = 0;

    // อ้างอิงอัตราค่าตอบแทนจากตัวเลือกในหน้าฟอร์ม
    if (year === "1") {
        rate = 55;
    } else if (year === "2") {
        rate = 65;
    } else if (year === "3") {
        rate = 75;
    } else if (year === "4") {
        rate = 85;
    }

    // คำนวณรายสัปดาห์ (อัตราต่อชั่วโมง x 5 ชั่วโมงต่อวัน x จำนวนวัน) 
    // หรือตามความเหมาะสมของโจทย์ ในที่นี้ใช้ Rate * Days ตามตัวอย่างผลลัพธ์
    return rate * workDays; 
}