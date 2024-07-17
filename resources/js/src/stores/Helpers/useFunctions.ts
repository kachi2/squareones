import Swal from 'sweetalert2'
import { useDateFormat, useOnline, useTimeAgo } from '@vueuse/core';

type DebounceFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;


export default { 
    isEmail: (email: string) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email)
    },

    isExtension: (fileName: string, requiredFormats: string[]) => {
        const regex = new RegExp('[^.]+$');
        const ext: any = fileName.match(regex);
        // get the extension
        const fileExtension = ext[0].toLowerCase()
        //make sure the file is a valid  format
        if (!(requiredFormats.some(x => x == fileExtension.toLowerCase()))) return false
        else return true
    },

    truncateStr(str: string, num: number) {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    },

    toast: (text: string, icon: any) => {
        // @ts-expect-error
        Swal.fire({
            toast: true,
            icon: `${icon}`,
            text: `${text}`,
            position: 'top-right',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            padding: 10,
            // iconColor: '#2c3e50',
        })
    },

    toastShort: (text: string) => {
        Swal.fire({
            toast: true,
            text: `${text}`,
            position: 'top-right',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: false,
            padding: 10,
        })
    },

    confirm: (text: string, btnText: string) => {
        return Swal.fire({
            // title: `${title}`,
            text: `${text}`,
            icon: 'question',
            // iconColor: '#873A70',
            showCancelButton: true,
            confirmButtonText: `${btnText}`,
            cancelButtonText: 'cancel',
            confirmButtonColor: '#0d6efd',
            reverseButtons: true,
            width: '300px',
        })
    },

    confirmTwoOptions: (text: string, confirmText: string, denyText: string) => {
        return Swal.fire({
            // title: `${title}`,
            text: `${text}`,
            icon: 'question',
            // iconColor: '#873A70',
            showCancelButton: false,
            showDenyButton: true,
            confirmButtonText: `${confirmText}`,
            denyButtonText: `${denyText}`,
            confirmButtonColor: '#0d6efd',
            denyButtonColor: '#111111',
            // reverseButtons: true,
            width: '300px',


        })
    },

    confirmDelete: (text: string, btnText: string) => {
        return Swal.fire({
            // title: `${title}`,
            text: `${text}`,
            icon: 'warning',
            iconColor: '#dc3545',
            showCancelButton: true,
            confirmButtonText: `${btnText}`,
            cancelButtonText: 'cancel',
            confirmButtonColor: '#dc3545',
            reverseButtons: true,
            width: '300px',
        })
    },

    addCommas: (numb: number) => {
        const str = !numb ? ['0'] : numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    },

    isOnline: () => {
        const online = useOnline()
        return online.value;
    },

    capsFirstLetter: (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    },

    debounce: <T extends (...args: any[]) => any>(func: T, delay: number): DebounceFunction<T> => {
        let timer: ReturnType<typeof setTimeout> | undefined;
        return (...args: Parameters<T>) => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    },

    greet: () => {
        const currentTime = new Date().getHours();
        if (currentTime < 12) {
            return "Good morning";
        } else if (currentTime < 18) {
            return "Good afternoon";
        } else {
            return "Good evening";
        }
    },

    dateDisplay: (date: Date, options?: string) => {
        if (date || date != null || date != undefined) {
            if (options) {
                if (options == 'm,y') {
                    const dd = useDateFormat(date, 'MMM, YYYY')
                    return dd.value
                }
                if (options == 'm,y,t') {
                    const dd = useDateFormat(date, 'MMM D, YYYY. mm:ss')
                    return dd.value
                }
            }
            const dd = useDateFormat(date, 'MMM D, YYYY')
            return dd.value
        }
        else return ''
    },

    formatDate: (date: Date, format = 'YYYY-MM-DD') => {
        if (date || date != null || date != undefined) {
            const dd = useDateFormat(date, format)
            return dd.value
        }
        else return ''
    },

    ageInYears: (dateOfBirth: Date) => {
        // Get today's date in milliseconds
        const today = Date.now();

        // Convert the date of birth to milliseconds
        const dobInMilliseconds = new Date(dateOfBirth).getTime();

        // Calculate the difference in milliseconds
        const timeElapsed = today - dobInMilliseconds;

        // Convert the difference to years (ignoring leap years and days for simplicity)
        const ageInYears = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));

        return ageInYears;
    },

    timeAgo: (date: Date) => {
        const timeAgo = useTimeAgo(date);
        return timeAgo.value;
    },

    chineseCheck: (value: any) => {
        var pattern = /^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;
        return pattern.test(value)
    },

    yearsAgo: (num = 0) => {
        const currentDate = new Date();
        return new Date(
            currentDate.getFullYear() - num,
            currentDate.getMonth(),
            currentDate.getDate()
        );
    }
}