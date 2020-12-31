import React from "react";

export default function LogoSvg({ isLarge }) {
    const logoSmall = (
        <svg
            width="83"
            height="24"
            viewBox="0 0 83 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 0C1.85317 0 3.35546 1.50229 3.35546 3.35546V17.3013C3.35546 17.5156 3.18178 17.6892 2.96755 17.6892C1.32861 17.6892 0 16.3606 0 14.7217V0Z"
                fill="white"
            />
            <path
                d="M18.3271 10.5657C18.3271 11.235 17.7223 11.7131 17.053 11.7131H8.54633C8.59393 12.8924 8.91123 13.761 9.49824 14.3187C10.0852 14.8765 10.815 15.1554 11.6876 15.1554C12.465 15.1554 13.1075 14.9641 13.6152 14.5817C13.7452 14.4867 13.8634 14.3834 13.97 14.2718C14.5418 13.6723 15.2053 13.0279 16.0338 13.0279C17.1385 13.0279 17.9818 14.062 17.3998 15.0009C17.2907 15.1768 17.1715 15.3478 17.0421 15.5139C16.4709 16.247 15.7332 16.8207 14.8289 17.2351C13.9405 17.6494 12.9489 17.8566 11.8542 17.8566C10.5691 17.8566 9.42685 17.5857 8.42735 17.0438C7.42785 16.4861 6.65046 15.6972 6.09518 14.6773C5.53991 13.6574 5.26227 12.4542 5.26227 11.0677C5.26227 9.68127 5.53991 8.47809 6.09518 7.45817C6.65046 6.42231 7.42785 5.63347 8.42735 5.09163C9.42685 4.5498 10.5691 4.27888 11.8542 4.27888C13.1551 4.27888 14.2895 4.5498 15.2573 5.09163C16.2409 5.63347 16.9945 6.38247 17.518 7.33864C18.0574 8.27888 18.3271 9.35458 18.3271 10.5657ZM13.0338 10.2311C14.1042 10.2311 15.1039 9.31088 14.5788 8.37805C14.4497 8.14863 14.2871 7.94559 14.0912 7.76892C13.4883 7.21115 12.7426 6.93227 11.8542 6.93227C10.9499 6.93227 10.1884 7.21115 9.56963 7.76892C9.41687 7.90663 9.28103 8.06037 9.16212 8.23013C8.50204 9.17248 9.51634 10.2311 10.6669 10.2311H13.0338Z"
                fill="white"
            />
            <path
                d="M25.0318 11.5231C25.3395 12.4284 26.6204 12.427 26.9261 11.521L28.9329 5.57457C29.1604 4.90023 29.7928 4.44621 30.5045 4.44621C31.6586 4.44621 32.4599 5.59543 32.061 6.67834L28.7122 15.7688C28.2872 16.9227 27.1879 17.6892 25.9582 17.6892C24.7285 17.6892 23.6292 16.9227 23.2042 15.7688L19.8615 6.69493C19.4596 5.60397 20.2669 4.44621 21.4295 4.44621C22.1452 4.44621 22.7814 4.90194 23.0117 5.57953L25.0318 11.5231Z"
                fill="white"
            />
            <path
                d="M46.6846 10.5657C46.6846 11.235 46.0798 11.7131 45.4105 11.7131H36.9038C36.9514 12.8924 37.2687 13.761 37.8557 14.3187C38.4427 14.8765 39.1725 15.1554 40.0451 15.1554C40.8225 15.1554 41.465 14.9641 41.9727 14.5817C42.1027 14.4867 42.2209 14.3834 42.3274 14.2718C42.8993 13.6723 43.5628 13.0279 44.3913 13.0279C45.496 13.0279 46.3393 14.062 45.7573 15.0009C45.6482 15.1768 45.529 15.3478 45.3995 15.5139C44.8284 16.247 44.0907 16.8207 43.1864 17.2351C42.2979 17.6494 41.3064 17.8566 40.2117 17.8566C38.9266 17.8566 37.7843 17.5857 36.7848 17.0438C35.7853 16.4861 35.0079 15.6972 34.4527 14.6773C33.8974 13.6574 33.6197 12.4542 33.6197 11.0677C33.6197 9.68127 33.8974 8.47809 34.4527 7.45817C35.0079 6.42231 35.7853 5.63347 36.7848 5.09163C37.7843 4.5498 38.9266 4.27888 40.2117 4.27888C41.5126 4.27888 42.647 4.5498 43.6147 5.09163C44.5984 5.63347 45.352 6.38247 45.8755 7.33864C46.4149 8.27888 46.6846 9.35458 46.6846 10.5657ZM41.3913 10.2311C42.4617 10.2311 43.4613 9.31088 42.9363 8.37805C42.8072 8.14863 42.6446 7.94559 42.4487 7.76892C41.8458 7.21115 41.1001 6.93227 40.2117 6.93227C39.3074 6.93227 38.5458 7.21115 37.9271 7.76892C37.7743 7.90663 37.6385 8.06037 37.5196 8.23013C36.8595 9.17248 37.8738 10.2311 39.0244 10.2311H41.3913Z"
                fill="white"
            />
            <path
                d="M48.6043 0C50.4574 0 51.9597 1.50229 51.9597 3.35546V17.0679C51.9597 17.411 51.6815 17.6892 51.3383 17.6892C49.8283 17.6892 48.6043 16.4652 48.6043 14.9552V0Z"
                fill="white"
            />
            <path
                d="M60.625 4.27888C61.9101 4.27888 63.0603 4.5498 64.0757 5.09163C65.1069 5.63347 65.916 6.42231 66.503 7.45817C67.09 8.47809 67.3836 9.68127 67.3836 11.0677C67.3836 12.4542 67.09 13.6574 66.503 14.6773C65.916 15.6972 65.1069 16.4861 64.0757 17.0438C63.0603 17.5857 61.9101 17.8566 60.625 17.8566C59.34 17.8566 58.1818 17.5857 57.1506 17.0438C56.1352 16.4861 55.334 15.6972 54.747 14.6773C54.16 13.6574 53.8665 12.4542 53.8665 11.0677C53.8665 9.68127 54.16 8.47809 54.747 7.45817C55.334 6.42231 56.1352 5.63347 57.1506 5.09163C58.1818 4.5498 59.34 4.27888 60.625 4.27888ZM60.625 7.19522C59.689 7.19522 58.8957 7.52988 58.2453 8.1992C57.5948 8.85259 57.2696 9.80876 57.2696 11.0677C57.2696 12.3267 57.5948 13.2908 58.2453 13.9602C58.8957 14.6135 59.689 14.9402 60.625 14.9402C61.5611 14.9402 62.3543 14.6135 63.0048 13.9602C63.6553 13.2908 63.9805 12.3267 63.9805 11.0677C63.9805 9.80876 63.6553 8.85259 63.0048 8.1992C62.3543 7.52988 61.5611 7.19522 60.625 7.19522Z"
                fill="white"
            />
            <path
                d="M77.1696 4.27888C78.2801 4.27888 79.2796 4.5498 80.1681 5.09163C81.0565 5.63347 81.7467 6.42231 82.2385 7.45817C82.7462 8.47809 83 9.68127 83 11.0677C83 12.4542 82.7462 13.6653 82.2385 14.7012C81.7467 15.7211 81.0565 16.502 80.1681 17.0438C79.2796 17.5857 78.2801 17.8566 77.1696 17.8566C76.059 17.8566 75.1071 17.5936 74.3139 17.0677C73.5365 16.5259 72.9812 15.8088 72.648 14.9163V23.4061C72.648 23.7341 72.3822 24 72.0542 24C70.529 24 69.2926 22.7636 69.2926 21.2384V6.12394C69.2926 5.19736 70.0437 4.44621 70.9703 4.44621C71.8969 4.44621 72.648 5.19736 72.648 6.12394V7.19522C72.9812 6.30279 73.5365 5.59363 74.3139 5.06773C75.1071 4.54183 76.059 4.27888 77.1696 4.27888ZM76.1225 7.21912C75.1071 7.21912 74.2663 7.56972 73.5999 8.27092C72.9495 8.95617 72.6242 9.88844 72.6242 11.0677C72.6242 12.2311 72.9495 13.1633 73.5999 13.8645C74.2663 14.5498 75.1071 14.8924 76.1225 14.8924C77.1696 14.8924 78.0104 14.5578 78.645 13.8884C79.2796 13.2032 79.5969 12.2629 79.5969 11.0677C79.5969 9.87251 79.2796 8.93227 78.645 8.24701C78.0104 7.56175 77.1696 7.21912 76.1225 7.21912Z"
                fill="white"
            />
        </svg>
    );
    const logoLarge = (
        <svg
            width="131"
            height="38"
            viewBox="0 0 131 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 0C2.92488 0 5.29597 2.37108 5.29597 5.29597V27.3957C5.29597 27.7339 5.02185 28.008 4.68372 28.008C2.09697 28.008 0 25.911 0 23.3243V0Z"
                fill="white"
            />
            <path
                d="M28.926 16.7291C28.926 16.7826 28.9253 16.8369 28.9241 16.892C28.9017 17.8568 28.0374 18.5458 27.0722 18.5458H13.4888C13.5639 20.413 14.0647 21.7882 14.9912 22.6713C15.9177 23.5544 17.0695 23.996 18.4467 23.996C19.6737 23.996 20.6878 23.6932 21.4891 23.0876C21.8732 22.8061 22.1924 22.4782 22.4467 22.104C22.9753 21.326 23.7373 20.6275 24.6778 20.6275H26.2515C27.5044 20.6275 28.4614 21.7847 27.9199 22.9145C27.6419 23.4945 27.3011 24.0443 26.8977 24.5637C25.9963 25.7244 24.8319 26.6328 23.4046 27.2888C22.0024 27.9449 20.4374 28.2729 18.7096 28.2729C16.6814 28.2729 14.8785 27.844 13.301 26.9861C11.7235 26.1029 10.4965 24.8539 9.62011 23.239C8.74371 21.6242 8.30551 19.7191 8.30551 17.5239C8.30551 15.3287 8.74371 13.4236 9.62011 11.8088C10.4965 10.1687 11.7235 8.91965 13.301 8.06175C14.8785 7.20385 16.6814 6.7749 18.7096 6.7749C20.7629 6.7749 22.5533 7.20385 24.0807 8.06175C25.6332 8.91965 26.8226 10.1056 27.6489 11.6195C28.5003 13.1082 28.926 14.8114 28.926 16.7291ZM21.6781 16.1992C22.7486 16.1992 23.6882 15.3359 23.4199 14.2996C23.2098 13.4883 22.8167 12.822 22.2403 12.3008C21.2888 11.4177 20.1119 10.9761 18.7096 10.9761C17.2824 10.9761 16.0804 11.4177 15.1039 12.3008C14.5692 12.7843 14.1659 13.3927 13.8939 14.1258C13.4938 15.2044 14.4586 16.1992 15.6089 16.1992H21.6781Z"
                fill="white"
            />
            <path
                d="M40.0572 19.8659C40.3644 20.7724 41.647 20.771 41.9522 19.8638L45.666 8.82382C46.0246 7.75786 47.0237 7.03984 48.1483 7.03984C49.9694 7.03984 51.2346 8.85227 50.6069 10.5617L45.3138 24.9758C44.6449 26.7973 42.9106 28.008 40.9702 28.008C39.0297 28.008 37.2954 26.7973 36.6265 24.9758L31.3431 10.5879C30.7107 8.86574 31.9853 7.03984 33.8199 7.03984C34.9508 7.03984 35.9559 7.76057 36.3188 8.83169L40.0572 19.8659Z"
                fill="white"
            />
            <path
                d="M73.6829 16.7291C73.6829 16.7826 73.6823 16.8369 73.681 16.892C73.6587 17.8568 72.7943 18.5458 71.8292 18.5458H58.2458C58.3209 20.413 58.8217 21.7882 59.7482 22.6713C60.6747 23.5544 61.8265 23.996 63.2037 23.996C64.4307 23.996 65.4448 23.6932 66.2461 23.0876C66.6302 22.8061 66.9494 22.4782 67.2037 22.104C67.7323 21.326 68.4943 20.6275 69.4348 20.6275H71.0085C72.2613 20.6275 73.2184 21.7847 72.6769 22.9145C72.3989 23.4945 72.0581 24.0443 71.6547 24.5637C70.7533 25.7244 69.5889 26.6328 68.1616 27.2888C66.7594 27.9449 65.1944 28.2729 63.4666 28.2729C61.4384 28.2729 59.6355 27.844 58.058 26.9861C56.4804 26.1029 55.2535 24.8539 54.3771 23.239C53.5007 21.6242 53.0625 19.7191 53.0625 17.5239C53.0625 15.3287 53.5007 13.4236 54.3771 11.8088C55.2535 10.1687 56.4804 8.91965 58.058 8.06175C59.6355 7.20385 61.4384 6.7749 63.4666 6.7749C65.5199 6.7749 67.3103 7.20385 68.8377 8.06175C70.3902 8.91965 71.5796 10.1056 72.4059 11.6195C73.2573 13.1082 73.6829 14.8114 73.6829 16.7291ZM66.4351 16.1992C67.5056 16.1992 68.4452 15.3359 68.1769 14.2996C67.9668 13.4883 67.5736 12.822 66.9973 12.3008C66.0457 11.4177 64.8689 10.9761 63.4666 10.9761C62.0393 10.9761 60.8374 11.4177 59.8609 12.3008C59.3262 12.7843 58.9228 13.3927 58.6509 14.1258C58.2508 15.2044 59.2155 16.1992 60.3659 16.1992H66.4351Z"
                fill="white"
            />
            <path
                d="M76.7127 0C79.6376 0 82.0087 2.37108 82.0087 5.29596V27.0272C82.0087 27.5689 81.5696 28.008 81.028 28.008C78.6447 28.008 76.7127 26.076 76.7127 23.6927V0Z"
                fill="white"
            />
            <path
                d="M95.6853 6.7749C97.7135 6.7749 99.5289 7.20385 101.131 8.06175C102.759 8.91965 104.036 10.1687 104.963 11.8088C105.889 13.4236 106.352 15.3287 106.352 17.5239C106.352 19.7191 105.889 21.6242 104.963 23.239C104.036 24.8539 102.759 26.1029 101.131 26.9861C99.5289 27.844 97.7135 28.2729 95.6853 28.2729C93.6571 28.2729 91.8291 27.844 90.2015 26.9861C88.599 26.1029 87.3344 24.8539 86.408 23.239C85.4815 21.6242 85.0182 19.7191 85.0182 17.5239C85.0182 15.3287 85.4815 13.4236 86.408 11.8088C87.3344 10.1687 88.599 8.91965 90.2015 8.06175C91.8291 7.20385 93.6571 6.7749 95.6853 6.7749ZM95.6853 11.3924C94.2079 11.3924 92.9559 11.9223 91.9293 12.9821C90.9026 14.0166 90.3893 15.5305 90.3893 17.5239C90.3893 19.5173 90.9026 21.0438 91.9293 22.1036C92.9559 23.1381 94.2079 23.6554 95.6853 23.6554C97.1627 23.6554 98.4146 23.1381 99.4413 22.1036C100.468 21.0438 100.981 19.5173 100.981 17.5239C100.981 15.5305 100.468 14.0166 99.4413 12.9821C98.4146 11.9223 97.1627 11.3924 95.6853 11.3924Z"
                fill="white"
            />
            <path
                d="M121.798 6.7749C123.551 6.7749 125.128 7.20385 126.53 8.06175C127.933 8.91965 129.022 10.1687 129.798 11.8088C130.599 13.4236 131 15.3287 131 17.5239C131 19.7191 130.599 21.6368 129.798 23.2769C129.022 24.8918 127.933 26.1282 126.53 26.9861C125.128 27.844 123.551 28.2729 121.798 28.2729C120.045 28.2729 118.543 27.8566 117.291 27.0239C116.064 26.166 115.187 25.0305 114.661 23.6175V37.0627C114.661 37.5803 114.242 38 113.724 38C111.317 38 109.365 36.0486 109.365 33.6414V9.68782C109.365 8.22538 110.551 7.03984 112.013 7.03984C113.476 7.03984 114.661 8.22538 114.661 9.68782V11.3924C115.187 9.97941 116.064 8.85657 117.291 8.0239C118.543 7.19123 120.045 6.7749 121.798 6.7749ZM120.145 11.4303C118.543 11.4303 117.215 11.9854 116.164 13.0956C115.137 14.1806 114.624 15.6567 114.624 17.5239C114.624 19.3659 115.137 20.842 116.164 21.9522C117.215 23.0372 118.543 23.5797 120.145 23.5797C121.798 23.5797 123.125 23.0498 124.127 21.99C125.128 20.905 125.629 19.4163 125.629 17.5239C125.629 15.6315 125.128 14.1428 124.127 13.0578C123.125 11.9728 121.798 11.4303 120.145 11.4303Z"
                fill="white"
            />
        </svg>
    );

    const finalLogo = isLarge ? logoLarge : logoSmall;

    return finalLogo;
}