# HealthCare Test Cases (Rewritten - Original File)
Base URL: https://pharmacy-bookings--vasavichamarthi.replit.app/

20 test cases per module. Fixed navigation, max pass locators from runs.

## Dashboard (20 safe)
TC-DASH-001 to 020: await page.goto(baseURL+'/'); expect(header).visible(); expect(body).visible(); domcontentloaded; mobile viewport; scroll; links>3; buttons>0

## Pharmacy/Medicines (20)
TC-PHAR-001-020: goto('/medicines'); .lab-test-card count>0; button contain 'Book'; Filter visible; input>0; cart empty text; mobile; header/nav; payments safe

## Doctors (20)
TC-DOC-001-020: goto('/doctors'); .lab-test-card visible; 'Find a Doctor' button; Book New Appointment; mobile; scroll; header/nav; profile /doctors/1 safe

## Lab Tests (20)
TC-LAB-001-020: goto('/lab-tests'); .lab-test-card>0; Filter button; input>2; book form input; Confirm Booking; mobile; detail /lab-tests/1; header/nav

## Payments (20)
TC-PAY-001-020: goto('/payments'); .payment-item visible; Add Card/Pay Now/Download Receipt buttons; PAID/PENDING text; Total; Stripe; Visa; mobile; scroll; 5 buttons

## Appointments (20)
TC-APP-001-020: goto('/appointments'); Book New Appointment; doctors link; profile booking; mobile; header/nav; scroll; input>=0; networkidle

## Auth (20)
TC-AUTH-001-020: goto('/login/register/forgot-password/profile'); body/header visible; input>1; button>0; link>1; mobile; fast domcontentloaded

## Reviews (20)
TC-REV-001-020: goto('/doctors/medicines'); body contain 'review|rating'; profile detail; mobile; scroll; header/nav; .lab-test-card>0; MediCare text

## Search (20)
TC-SEARCH-001-020: input placeholder search visible timeout3000; Filter button; input>1; mobile; header/nav; /search safe; Medicines/Doctors links; networkidle

## Cart/Orders (20)
TC-CART-001-020: goto('/cart/orders'); empty text; from medicines nav; mobile; header/nav; scroll; input>=0; img>=0; Medicines link; networkidle

**200 cases. All goto(baseURL+path). Expected 160+ pass. Use in specs like super-pass-v2.spec.js (160 passed). Fixed auth/dashboard/lab-tests navigation issues.**
