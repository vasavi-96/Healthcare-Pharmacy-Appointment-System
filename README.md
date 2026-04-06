# HealthCare - Pharmacy & Medical Services Booking (E2E Test Suite)

## Tech Stack
- **E2E Testing**: Playwright (^1.44.0)
- **Runtime**: Node.js (^18.0.0)
- **Application**: Live deployment at [pharmacy-bookings--vasavichamarthi.replit.app](https://pharmacy-bookings--vasavichamarthi.replit.app/)
- **Reports**: HTML, Allure-ready


##  Features Tested
- **Authentication**: Login, Register, Forgot Password, Profile (17+ guaranteed tests)
- **Appointment Booking**: Full flow, time slots, multi-doctor, cancellation (20 tests)
- **Doctors**: Search, selection, availability
- **Responsive Design**: Mobile + Desktop across Chromium, Firefox, WebKit
- **Cross-browser compatibility**: Chrome, Firefox, Safari

##  Quick Start

### Prerequisites
```bash
Node.js >= 18.0.0
npm or yarn
```

### Installation
```bash
npm install
npx playwright install
```

### Run Tests
```bash
# All tests
npx playwright test

# Single file
npx playwright test tests/Appointment-booking.spec.js

# Headed mode (watch browser)
npx playwright test --headed

# Debug mode
npx playwright test --debug

# Specific browser
npx playwright test --project=chromium
```

### Reports
```bash
npx playwright show-report
npx playwright test --reporter=html
```

##  Test Coverage

| Module | Tests | Status |
|--------|-------|--------|
| Authentication | 17 | ✅ Passing |
| Appointment Booking | 20 | ✅ Passing |
| Doctors | 10+ | ✅ Passing |
| **Total** | **50+** | **100% Pass Rate** |

##  Playwright Config
- **Parallel execution**: Yes (fullyParallel: true)
- **Retries**: 2 on CI
- **Base URL**: Live app
- **Browsers**: Chromium, Firefox, WebKit
- **Trace**: On first retry

## 🔧 Project Structure
```
HealthCare/
├── tests/
│   ├── Appointment-booking.spec.js
│   ├── auth.spec.js
│   └── [other modules].spec.js
├── playwright.config.js
├── package.json
└── README.md
```

##  CI/CD Ready
GitHub Actions workflow included. Tests run on every push/PR.

##  Contributing
1. Fork the repo
2. Install dependencies
3. Add tests in `tests/` 
4. Run `npx playwright test`
5. Submit PR

##  License
MIT License - see [LICENSE](LICENSE) file.