// const request = { id: "REQ-001", items: 3, priceMinor: 25000};
// const subtotalMinor = request.items * request.priceMinor;
// console.log({ requestID: request.id, subtotalMinor, runtime: process.version});
// //yxPfx9vb1c3KpojO
//node

import mongoose from "mongoose";

const manzil = process.env.MONGO_URL;

console.log("Kuting... Kompyuterimni ishga tushiryapman...");
try {
    await mongoose.connect(manzil);
    console.log("yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi, yuray bolmaydi");
} catch (xato) {
    console.log("ulanishda bolmadi mangodo dasturri boalmadi");
}