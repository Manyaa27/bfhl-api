# BFHL API
# for bajaj qualifier-1 test

A REST API built with **Node.js + Express** for the BFHL assignment.  
It processes an input array and returns odd numbers, even numbers, alphabets (uppercase), special characters, sum of numbers, and a custom concatenated string.

---

## Endpoint

### **POST** `/bfhl`

#### Request Body
```json
{
  "data": ["a","1","334","4","R","$"]
}

{
  "is_success": true,
  "user_id": "manya_yadav_27052004",
  "email": "manya.yadav272004@gmail.com",
  "roll_number": "22BCT0189",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
