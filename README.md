# News App Assignment

## Overview
This project aims to create a responsive and user-friendly news application with Crud Operation storing news from https://newsdata.io/ throungh api in mongoDB.

1. **User Registration and Login:**
   - Users can create accounts and log in to access personalized news preferences.
   - Firebase used for authentication.
   - **Dummy Login Credentials:**
   - **Email ID:** neoma_ai@gmail.com
   - **Password:** neoma_ai@123

## Project Live
link: (https://neoma-ai-frontend.vercel.app/)

## Video Demo
link: (https://www.loom.com/share/785d391ae62149158e34f0b28b23a77e?sid=e214c4f6-d07c-4db4-a2be-0f7a82bb8637)

![Alt text](https://githubpurpose.s3.ap-south-1.amazonaws.com/Screenshot%202023-12-26%20at%203.22.27%E2%80%AFPM.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCmFwLXNvdXRoLTEiSDBGAiEAi9YuexmpsDJruUSM6LjH%2BepCnSh%2FPaOctNjS59zoLtECIQDMjfsUBj4RArHUzRg51%2F8hDqY5tY%2FcCrx6OCkOUeqmESrtAgiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDMyNjE2NDQ5NTYwNiIMJom7KYm6eWSfn4buKsECLCvd%2BP4GnIV0ehUfM5OuY7L7zdV0mnRIII2ykpARJVdXOMFetu5QEVYU%2FHqrpywMcSrSe5BhaBBjKid1PrCD4zkZjIOOdDkP4vrbtVJ8BqjfCWZM51JhG2A7%2FD82EYmoXcpyz0yRUCfAi6XLw4vqnHBSck1qe4Lv6zSK5oUO%2FIY9qW3A63txHHQElwK%2BhrrN0kStzSw18TXmCkDic3e5txSBhsEqRAY5nKDG%2FA3tuXSIRMUi6Q8Cr7SaE1OSxmgsjtR5MBGJ3aTt0hElUsUi1Igx9CvmTmxvjrx%2F7gCZTsZtFDmaKhuKhyJKR1hPx%2FJkPqvPioaAbtBNIVbt5VaoPRo9MGiInlwQ8aige%2BGmYqVDnq1jSv7Sm4EAG9ZnRwf1uzptsUiBMO4wImDYN0Swmlbcgc%2FmuwW5XBGzuuUX%2BzsbMKfNqqwGOrICT3DgCAVjUsfqILrdWR5avAdTAOxUMkdDFSRkEpiFxkeZSUaVAsbS4KjOzShpdv3mxdsgud%2Bd2F94AbkcXmtbd56Xl%2BYnEvLdNIRPyhJsdowFAu%2BZ0Lig6KuwdgFks11P0Wffzyy%2F9XCmXbHdET6rJqdaHmMN1KtyBGlGHffFEm7AefrEtd02Qm6qspsd8fNhlZwpYhoRUU6l9LJR%2F0SJA14lsA9XGy5MljYOU6lVvl75FGR7K2HtiIW%2BvJcgGVkq1%2BDLs0%2FTl%2Fj4GzgHVVLaIP3WPmY6e39GQwGzeL4pqNtgA3uU7hFWpyi8ACwKlQMOzX%2FjpkD9rQV0aoOqEQ68mgUvgqKe%2FqJ62L7xpb13CMDxJABWVAXRTBm%2BO4RPlKEhiR72PGc2B5%2FHBEUBzYU3KEYk&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231226T111844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUX4HLHT3P5NLQ35P%2F20231226%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=7910c9dc190e209d293cb35b1251e4923e976949bd800f38bcbacae5680ac7b7)

![Alt text](https://githubpurpose.s3.ap-south-1.amazonaws.com/Screenshot%202023-12-26%20at%203.22.33%E2%80%AFPM%20%282%29.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCmFwLXNvdXRoLTEiSDBGAiEAi9YuexmpsDJruUSM6LjH%2BepCnSh%2FPaOctNjS59zoLtECIQDMjfsUBj4RArHUzRg51%2F8hDqY5tY%2FcCrx6OCkOUeqmESrtAgiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDMyNjE2NDQ5NTYwNiIMJom7KYm6eWSfn4buKsECLCvd%2BP4GnIV0ehUfM5OuY7L7zdV0mnRIII2ykpARJVdXOMFetu5QEVYU%2FHqrpywMcSrSe5BhaBBjKid1PrCD4zkZjIOOdDkP4vrbtVJ8BqjfCWZM51JhG2A7%2FD82EYmoXcpyz0yRUCfAi6XLw4vqnHBSck1qe4Lv6zSK5oUO%2FIY9qW3A63txHHQElwK%2BhrrN0kStzSw18TXmCkDic3e5txSBhsEqRAY5nKDG%2FA3tuXSIRMUi6Q8Cr7SaE1OSxmgsjtR5MBGJ3aTt0hElUsUi1Igx9CvmTmxvjrx%2F7gCZTsZtFDmaKhuKhyJKR1hPx%2FJkPqvPioaAbtBNIVbt5VaoPRo9MGiInlwQ8aige%2BGmYqVDnq1jSv7Sm4EAG9ZnRwf1uzptsUiBMO4wImDYN0Swmlbcgc%2FmuwW5XBGzuuUX%2BzsbMKfNqqwGOrICT3DgCAVjUsfqILrdWR5avAdTAOxUMkdDFSRkEpiFxkeZSUaVAsbS4KjOzShpdv3mxdsgud%2Bd2F94AbkcXmtbd56Xl%2BYnEvLdNIRPyhJsdowFAu%2BZ0Lig6KuwdgFks11P0Wffzyy%2F9XCmXbHdET6rJqdaHmMN1KtyBGlGHffFEm7AefrEtd02Qm6qspsd8fNhlZwpYhoRUU6l9LJR%2F0SJA14lsA9XGy5MljYOU6lVvl75FGR7K2HtiIW%2BvJcgGVkq1%2BDLs0%2FTl%2Fj4GzgHVVLaIP3WPmY6e39GQwGzeL4pqNtgA3uU7hFWpyi8ACwKlQMOzX%2FjpkD9rQV0aoOqEQ68mgUvgqKe%2FqJ62L7xpb13CMDxJABWVAXRTBm%2BO4RPlKEhiR72PGc2B5%2FHBEUBzYU3KEYk&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231226T111940Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUX4HLHT3P5NLQ35P%2F20231226%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=a9d8c2e9e1cd13484f6f90b955d4309a69f7a420c2b5126787dfa2789010a75b)

2. **Design and UI/UX:**
   - Created a best possible user-friendly interface that is responsive and provides a smooth user experience.

## Getting Started
To run the project locally, follow these steps:

3. Clone the repository:

   ```bash
   git clone https://github.com/your-username/news-app.git
   cd news-app
4. Install dependencies:
    ```bash
    npm install

5. Run the application:
    ```bash
    npm start

