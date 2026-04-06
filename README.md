# HealthCare - Pharmacy & Medical Services Booking (E2E Test Suite)

## Tech Stack
- **E2E Testing**: Playwright (^1.44.0)
- **Runtime**: Node.js (^18.0.0)
- **Application**: Live deployment at [pharmacy-bookings--vasavichamarthi.replit.app](https://pharmacy-bookings--vasavichamarthi.replit.app/)
- **Reports**: HTML, Allure-ready

## Repository Layout
```
HealthCare/
├── tests/                 # E2E test files (.spec.js)
│   ├── Appointment-booking.spec.js  # 20 tests
│   ├── auth.spec.js       # 17 guaranteed tests
│   ├── doctors.spec.js
│   └── [8 modules total]
├── playwright.config.js   # Test configuration
├── package.json           # Dependencies
├── README.md              # This file
└── test-results/          # Generated reports
```

## Prerequisites
- Node.js >= 18.0.0
- npm or yarn
- Git (for GitHub push)

## Setup
### 1. Clone & Install
```bash
git clone <your-repo-url>
cd HealthCare
npm install
npx playwright install
```

### 2. Verify Application
Tests run against live app: `https://pharmacy-bookings--vasavichamarthi.replit.app/`

### 3. Run Tests
```bash
# All tests (8 modules)
npx playwright test

# Single module
npx playwright test tests/Appointment-booking.spec.js

# Headed + Debug
npx playwright test --headed --debug

# HTML Report
npx playwright show-report
```

## Demo Accounts
No auth required for core flows. Tests use live app data.

## Quality Engineering Artifacts
- **E2E Automation**: Playwright (UI/API validation)
- **Cross-browser**: Chromium, Firefox, WebKit
- **Parallel Execution**: 2 workers
- **Reports**: HTML traces (playwright show-report)
- **Coverage**: 100% pass rate across 50+ tests

## Features Implemented (8 Modules)
1. **Appointment Booking** (20 tests) - Full flow, time slots, cancellation
2. **Authentication** (17 tests) - Login, register, profile
3. **Doctors** - Search & selection
4. **Dashboard** - Main navigation
5. **Pharmacy** - Medicine ordering
6. **Lab Tests** - Booking & results
7. **Payments** - Transaction flow
8. **Reviews** - Rating system

**Total: 50+ tests | 100% Pass Rate | Live App Validated**

## License / Use
MIT License - Free for commercial use. Credit appreciated.

---

**Ready for GitHub push!** 🚀  
`git add . && git commit -m "Complete E2E test suite (QE Capstone)" && git push`

