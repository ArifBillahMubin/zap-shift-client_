import Faq from "react-faq-component";
const data = {
    rows: [
        {
            title: "How does this posture corrector work?",
            content:
                "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine."
        },
        {
            title: "Is it suitable for all ages and body types?",
            content:
                "Yes, the posture corrector is designed to be suitable for different ages and body types. However, proper sizing and adjustment are important for comfortable and effective use."
        },
        {
            title: "Does it really help with back pain and posture improvement?",
            content:
                "Yes, a posture corrector can provide support and encourage better posture, which may help reduce discomfort and improve posture when used properly and consistently."
        },
        {
            title: "Does it have smart features like vibration alerts?",
            content:
                "Yes, some smart posture correctors include vibration alerts that gently remind you when your posture needs adjustment."
        },
        {
            title: "How will I be notified when the product is back in stock?",
            content:
                "You can receive a notification when the product is back in stock by subscribing to stock alerts or enabling notifications from the website."
        }
    ]
};

const config = {
    animate: true,
    arrowIcon: "⌄",
    tabFocus: true,
};

const styles = {
    bgColor: "transparent",
    titleTextColor: "#17343A",
    rowTitleColor: "#17343A",
    rowContentColor: "#6B7280",
    arrowColor: "#17343A",
    rowContentPaddingTop: "15px",
    rowContentPaddingBottom: "15px",
    rowContentPaddingLeft: "15px",
    rowContentPaddingRight: "15px",
    rowTitleTextSize: "14px",
    rowContentTextSize: "13px",
    rowTitleTextWeight: "600",
    rowContentTextWeight: "400",
    transitionDuration: "0.3s",
    timingFunc: "ease",
};

import React from 'react';

const FAQ = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="py-10 px-5 ">
                <div className="py-5">
                    <h1 className="text-3xl text-secondary font-bold text-center">Frequently Asked Question (FAQ)</h1>
                    <p className="text-gray-500 text-center max-w-2xl mx-auto">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
                </div>
                <div>
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQ;