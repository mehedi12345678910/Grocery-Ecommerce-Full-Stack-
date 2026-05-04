// export const adminOrderNotificationTemplate = ({
//   orderId,
//   name,
//   email,
//   contact,
//   address,
//   instruction,
//   items,
//   totalPrice,
// }) => {
//   return `
//   <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4; padding:20px; font-family:Arial;">
//     <tr>
//       <td align="center">
//         <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; padding:20px; border-radius:8px;">
          
//           <!-- Header -->
//           <tr>
//             <td align="center" style="padding-bottom:20px;">
//               <h2 style="margin:0;">📦 New Order Received</h2>
//               <p style="color:#555;">Order ID: <strong>${orderId}</strong></p>
//             </td>
//           </tr>

//           <!-- Customer Info -->
//           <tr>
//             <td style="padding-bottom:15px;">
//               <h3 style="margin-bottom:8px;">👤 Customer Information</h3>
//               <table width="100%" cellpadding="6" cellspacing="0" style="border:1px solid #ddd; border-collapse:collapse;">
//                 <tr>
//                   <td width="30%" style="font-weight:bold;">Name</td>
//                   <td>${name}</td>
//                 </tr>
//                 <tr>
//                   <td style="font-weight:bold;">Email</td>
//                   <td>${email}</td>
//                 </tr>
//                 <tr>
//                   <td style="font-weight:bold;">Contact</td>
//                   <td>${contact}</td>
//                 </tr>
//                 <tr>
//                   <td style="font-weight:bold;">Address</td>
//                   <td>${address}</td>
//                 </tr>
//                 <tr>
//                   <td style="font-weight:bold;">Instruction</td>
//                   <td>${instruction || "N/A"}</td>
//                 </tr>
//               </table>
//             </td>
//           </tr>

//           <!-- Order Items -->
//           <tr>
//             <td>
//               <h3 style="margin-bottom:8px;">🛒 Order Items</h3>
//               <table width="100%" border="1" cellspacing="0" cellpadding="8" style="border-collapse:collapse;">
//                 <thead>
//                   <tr style="background:#f0f0f0;">
//                     <th align="left">Product</th>
//                     <th align="center">Qty</th>
//                     <th align="right">Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   ${items
//                     .map(
//                       (item) => `
//                     <tr>
//                       <td>${item.title}</td>
//                       <td align="center">${item.quantity}</td>
//                       <td align="right">৳${item.price}</td>
//                     </tr>
//                   `
//                     )
//                     .join("")}
//                 </tbody>
//               </table>
//             </td>
//           </tr>

//           <!-- Total -->
//           <tr>
//             <td align="right" style="padding-top:15px;">
//               <h3>Total Amount: ৳${totalPrice}</h3>
//             </td>
//           </tr>

//           <!-- Footer -->
//           <tr>
//             <td align="center" style="padding-top:20px; color:#777;">
//               <p style="font-size:12px;">
//                 This email was automatically generated from <strong>Hero Kidz</strong> system.
//               </p>
//             </td>
//           </tr>

//         </table>
//       </td>
//     </tr>
//   </table>
//   `;
// };

export const adminOrderNotificationTemplate = ({
  orderId,
  name,
  email,
  contact,
  address,
  instruction,
  items,
  totalPrice,
}) => {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4; padding:20px; font-family:Arial, sans-serif;">
    <tr>
      <td align="center">
        <table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; border: 1px solid #ddd; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Alert Header -->
          <tr>
            <td align="center" style="background:#d32f2f; padding:20px;">
              <h2 style="margin:0; color:#ffffff; font-size: 24px;">🔔 New Order Alert!</h2>
              <p style="color:#ffcdd2; margin:5px 0 0 0;">GhorerBazar - Action Required</p>
            </td>
          </tr>

          <!-- Summary Bar -->
          <tr>
            <td style="padding:20px; background:#fff8e1; border-bottom: 1px solid #ffe082; text-align: center;">
              <span style="font-size:16px; color:#5d4037;">Order ID: <strong>#${orderId}</strong></span>
              <span style="margin:0 15px; color:#ccc;">|</span>
              <span style="font-size:16px; color:#5d4037;">Total: <strong>৳${totalPrice}</strong></span>
            </td>
          </tr>

          <!-- Customer & Shipping Section -->
          <tr>
            <td style="padding:25px 30px;">
              <h3 style="margin:0 0 15px 0; color:#8B0000; border-bottom: 1px solid #eee; padding-bottom: 8px;">👤 Customer Details</h3>
              <table width="100%" cellpadding="8" cellspacing="0" style="font-size:14px; color:#333;">
                <tr>
                  <td width="30%" style="font-weight:bold; color:#666; border-bottom: 1px solid #f9f9f9;">Name:</td>
                  <td style="border-bottom: 1px solid #f9f9f9;">${name}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold; color:#666; border-bottom: 1px solid #f9f9f9;">Phone:</td>
                  <td style="border-bottom: 1px solid #f9f9f9; color:#d32f2f; font-weight:bold;">${contact}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold; color:#666; border-bottom: 1px solid #f9f9f9;">Email:</td>
                  <td style="border-bottom: 1px solid #f9f9f9;">${email}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold; color:#666; border-bottom: 1px solid #f9f9f9;">Address:</td>
                  <td style="border-bottom: 1px solid #f9f9f9;">${address}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold; color:#666;">Instructions:</td>
                  <td style="color:#ef6c00; font-style: italic;">${instruction || "No special instructions"}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Items Table -->
          <tr>
            <td style="padding:0 30px;">
              <h3 style="margin:10px 0 15px 0; color:#8B0000;">🛒 Order Items</h3>
              <table width="100%" cellspacing="0" cellpadding="10" style="border:1px solid #eee; border-radius:8px; overflow:hidden;">
                <thead style="background:#fcfcfc;">
                  <tr>
                    <th align="left" style="border-bottom:2px solid #8B0000; color:#333;">Product</th>
                    <th align="center" style="border-bottom:2px solid #8B0000; color:#333;">Qty</th>
                    <th align="right" style="border-bottom:2px solid #8B0000; color:#333;">Price</th>
                  </tr>
                </thead>
                <tbody>
                  ${items
                    .map(
                      (item) => `
                    <tr>
                      <td style="border-bottom:1px solid #eee; color:#444;">${item.title}</td>
                      <td align="center" style="border-bottom:1px solid #eee; color:#444;">${item.quantity}</td>
                      <td align="right" style="border-bottom:1px solid #eee; font-weight:bold; color:#333;">৳${item.price}</td>
                    </tr>
                  `
                    )
                    .join("")}
                </tbody>
              </table>
            </td>
          </tr>

          <!-- Footer Action -->
          <tr>
            <td align="center" style="padding:30px;">
              <p style="font-size:12px; color:#999; margin:0;">
                This notification was sent automatically by <strong>GhorerBazar Admin System</strong>.<br>
                Please process the order as soon as possible.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
  `;
};