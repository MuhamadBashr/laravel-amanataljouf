import AuthenticatedLayout from "@/DepartmentManagerUser/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { useState } from "react";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";
export default function index(props) {
    DataTable.use(DT);
    const columns = [
        { data: "الكود" },
        { data: "الاسم" },
        { data: "الجهات" },
        { data: "الجهة" },
        { data: "نوع الفترة" },
        { data: "الفتره" },
        { data: "السنة" },
        { data: "الحالة" },
    ];
    const [show, setShow] = useState(false);
    function ShowMesaage(show) {
        if (show) {
            return (
                <div className="flex justify-center bg-yellow-300 ">
                    <p>يرجى البحث لاظهار النتائج</p>
                </div>
            );
        } else {
            return (
                <div className="flex flex-col">
                    <div className="flex justify-between w-full p-7 flex-wrap ">
                        <button className="flex flex-col min-h-24 w-48 bg-[#F4F4F4] m-4 min-w-32">
                            <h1 className="flex justify-center text-lg">20</h1>
                            <h6 className="flex justify-center">
                                النماذج الإجمالية
                            </h6>
                        </button>
                        <button className="flex justify-center flex-col min-h-24 w-48 bg-[#F4F4F4] m-4 min-w-32">
                            <h1 className="flex justify-center text-lg">0</h1>
                            <h6 className="flex justify-center">
                                نماذج تم نشرها
                            </h6>
                        </button>
                        <button className="flex justify-center flex-col min-h-24 w-48 bg-[#F4F4F4] m-4 min-w-32">
                            <h1 className="flex justify-center text-lg">0</h1>
                            <h6 className="flex justify-center">
                                انماذج تم العمل عليها
                            </h6>
                        </button>
                        <button className="flex justify-center flex-col min-h-24 w-48 bg-[#F4F4F4] m-4 min-w-32">
                            <h1 className="flex justify-center text-lg">0</h1>
                            <h6 className="flex justify-center">
                                نماذج لم يتم العمل عليها
                            </h6>
                        </button>
                        <button className="flex justify-center flex-col min-h-24 w-48 bg-[#F4F4F4] m-4 min-w-32">
                            <h1 className="flex justify-center text-lg">20</h1>
                            <h6 className="flex justify-center">
                                نماذج تم إعتمادها
                            </h6>
                        </button>
                        <button className="flex justify-center flex-col min-h-24 w-48 bg-[#F4F4F4] m-4 min-w-32">
                            <h1 className="flex justify-center text-lg">0</h1>
                            <h6 className="flex justify-center">
                                نماذج تم رفضها
                            </h6>
                        </button>
                    </div>
                    <button className="bg-gray-600 rounded-full w-36 h-10 text-white font-semibold mt-4">
                        <div className="flex gap-3 justify-center items-center">
                            <p className="text-xl">تصدير البيانات</p>
                        </div>
                    </button>
                    <DataTable
                        columns={columns}
                        className="display"
                        options={{
                            responsive: true,
                            select: true,
                        }}
                    >
                        <thead>
                            <th>الكود</th>
                            <th>الاسم</th>
                            <th>الجهات</th>
                            <th>الجهة</th>
                            <th>نوع الفترة</th>
                            <th>الفتره</th>
                            <th>السنة</th>
                            <th>الحالة</th>
                        </thead>
                    </DataTable>
                </div>
            );
        }
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2
                    className="font-semibold text-xl text-gray-800 leading-tight"
                    dir="rtl"
                >
                    متابعة نماذج البيانات
                </h2>
            }
            dir="rtl"
        >
            <Head title="Dashboard" />

            <div className="py-12" dir="rtl">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        <div className="p-6 text-gray-900">
                            <div className="flex flex-row  ">
                                <div className="flex flex-row flex-wrap  w-full">
                                    <div>
                                        <div className="flex flex-col mx-8 rtl">
                                            <label
                                                htmlFor="PeriodType"
                                                dir="rtl"
                                            >
                                                نوع الفترة
                                            </label>
                                            <select
                                                name="PeriodType"
                                                id="PeriodType"
                                                className="min-w-40"
                                            >
                                                <option>اختر</option>
                                                <option value="yerarPeriodType">
                                                    سنوى
                                                </option>
                                                <option value="halfPeriodType">
                                                    نصف سنوى
                                                </option>
                                                <option value="quarterPeriodType">
                                                    ربع سنوي
                                                </option>
                                                <option value="partPeriodType">
                                                    فترة
                                                </option>
                                                <option value="monthePeriodType">
                                                    شهري
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col mx-8">
                                            <label htmlFor="years">السنة</label>
                                            <input
                                                type="number"
                                                id="years"
                                                name="years"
                                                className="min-w-40"
                                                min="1900"
                                                max="2099"
                                                step="1"
                                                value="2025"
                                            ></input>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col mx-8">
                                            <label htmlFor="Half">النصف</label>
                                            <select
                                                name="Half"
                                                id="Half"
                                                className="min-w-40"
                                            >
                                                <option>اختر النصف</option>
                                                <option value="F-half">
                                                    النصف الأول
                                                </option>
                                                <option value="S-half">
                                                    النصف الثاني
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col mx-8">
                                            <label htmlFor="quarter">
                                                الربع
                                            </label>
                                            <select
                                                name="cars"
                                                id="quarter"
                                                className="min-w-40"
                                            >
                                                <option>اختر الربع</option>
                                                <option value="F-quarter">
                                                    الربع الأول
                                                </option>
                                                <option value="S-quarter">
                                                    الربع الثاني
                                                </option>
                                                <option value="T-quarter">
                                                    الربع الثالث
                                                </option>
                                                <option value="Q-quarter">
                                                    الربع الرابع
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col mx-8">
                                            <label htmlFor="monthe">
                                                الشهر
                                            </label>
                                            <select
                                                name="monthe"
                                                id="monthe"
                                                className="min-w-40"
                                            >
                                                <option>اختر الشهر</option>
                                                <option value="January">
                                                    يناير
                                                </option>
                                                <option value="February">
                                                    فبراير
                                                </option>
                                                <option value="March">
                                                    مارس
                                                </option>
                                                <option value="May">
                                                    مايو
                                                </option>
                                                <option value="April">
                                                    أبريل
                                                </option>
                                                <option value="May">
                                                    يونيو
                                                </option>
                                                <option value="July">
                                                    يوليو
                                                </option>
                                                <option value="August">
                                                    أغسطس
                                                </option>
                                                <option value="September">
                                                    سبتمبر
                                                </option>
                                                <option value="October">
                                                    أكتوبر
                                                </option>
                                                <option value="November">
                                                    نوفمبر
                                                </option>
                                                <option value="December">
                                                    ديسمبر
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col mx-8">
                                            <label htmlFor="handWork">
                                                الجهة
                                            </label>
                                            <select
                                                name="handWork"
                                                id="handWork"
                                                className="min-w-40"
                                            >
                                                <option>اختر نوع الجهة</option>
                                                <option value="volvo">
                                                    البلديات
                                                </option>
                                                <option value="saab">
                                                    الأمانات
                                                </option>
                                                <option value="mercedes">
                                                    الوكالات
                                                </option>
                                                <option value="audi">
                                                    بلديات فرعية
                                                </option>
                                                <option value="audi">
                                                    أحياء
                                                </option>
                                                <option value="audi">
                                                    قطاعات
                                                </option>
                                                <option value="audi">
                                                    جهات أخري
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col mx-8">
                                            <label htmlFor="handWorkName">
                                                اسم الجهة
                                            </label>
                                            <select
                                                name="handWorkName"
                                                id="handWorkName"
                                                className="min-w-40"
                                            >
                                                <option>اختر اسم الجيه</option>
                                                <option value="بلدية الناصفة">
                                                    بلدية الناصفة
                                                </option>
                                                <option value="بلدية محافظة دومة الجندل">
                                                    بلدية محافظة دومة الجندل
                                                </option>
                                                <option value="بلدية زلوم">
                                                    بلدية زلوم
                                                </option>
                                                <option value="بلدية العيساوية">
                                                    بلدية العيساوية
                                                </option>
                                                <option value="بلدية محافظة طبرجل">
                                                    بلدية محافظة طبرجل
                                                </option>
                                                <option value="بلدية محافظة القريات">
                                                    بلدية محافظة القريات
                                                </option>
                                                <option value="بلدية الحديثة">
                                                    بلدية الحديثة
                                                </option>
                                                <option value="بلدية أبو عجرم">
                                                    بلدية أبو عجرم
                                                </option>
                                                <option value="بلدية العيساوية">
                                                    بلدية العيساوية
                                                </option>
                                                <option value="أمانة منطقة الجوف">
                                                    أمانة منطقة الجوف
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                className="bg-gray-600 rounded-full w-36 h-10 text-white font-semibold mt-4"
                                onClick={() => setShow(!show)}
                            >
                                <div className="flex gap-3 justify-center items-center">
                                    <p className="text-xl">عرض النماذج</p>
                                </div>
                            </button>
                        </div>
                        {/* <div className="flex justify-center bg-yellow-300 ">
                            <p>يرجى البحث لاظهار النتائج</p>
                        </div> */}
                        {ShowMesaage(show)}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
