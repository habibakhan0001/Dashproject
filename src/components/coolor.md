#9d0208
#343a40
    --bs-gray-dark: #343a40;
    --bs-primary: #EB1616;
    --bs-secondary: #191C24;

    अगर आप चाहो कि कोई path पे न जाने पर default Home खुले, तो यह डाल सकते हो:

javascript
Copy
Edit
<Route path="*" element={<Toolnest />} />
यह fallback route कहलाता है।