When the user opens their phone camera and scans a qr code (ex: https://martkitstorage.com/qr/123456) the only data available to the user should be the item id (shown in the qr code), the item owner's user id (possibly hashed), and the actionType (store, rent, or sell).
itemDetails will only be made available if the actionType is rent or sell or if the user is the owner of the item.

If the item is marked store, check if the user id is in local storage. If it is, show the item details. If it is not, show a message saying that the user is not authorized to view the item details and redirect to login page.

If the item is marked rent or sell, show the item details.

If the qr code is not 6 chars long, show a message saying that the qr code is invalid and redirect to the home page.

If the qr code is not found in the database, open the app and set the Zustand state items to the following to begin the item add process:
setCurrentStep('choose-action')
setQRCode(qrCode)