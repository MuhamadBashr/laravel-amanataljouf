import AuthenticatedLayout from "@/DepartmentManagerUser/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
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
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        phone: "",
        idNumber: "",
        StateOfUser: false,
        TybeOfUser: "",
        Job: "",
        userName: "",
        name: "",
        EnterName: "",
        typeOfEnterName: "",
        model: "",
        gendra: true,
        escalation: false,
    });
    const [serchValue, setSerchValue] = useState("");
    const [table, setTable] = useState(false); //عرض الجدول من نتائج البحث
    const [user, setUserShow] = useState(false); //عرض شاشة البحث عن المستخدمين
    const [serchEmploeState, setSerchEmploe] = useState(false); //عرض شاشة البحث عن مستخدمين
    // const [gender, setGender] = useState(""); //تحديد الجنس
    // const [escalation, setEscalation] = useState(false); //التصعيد
    // const [nameOfUser, setNameOfUser] = useState();
    // const [models, setModels] = useState(""); //النماذج
    // const [entityName, setEntityName] = useState(""); //اسم المدخل
    // const [entity, setEntity] = useState(""); //المدخل
    // const [status, setStatus] = useState(""); // الحالة في حالة المستخدم كان معل او لا
    // const [userType, setUserType] = useState(""); // نوع المستخدم
    const [idNumber, setIdNumber] = useState("");
    // const [username, setUsername] = useState("");
    // const [phone, setPhone] = useState("");
    // const [email, setEmail] = useState("");
    // const [jobTitle, setJobTitle] = useState("");
    const [] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("UsersAdd.store"), {
            onError: (errors) => {
                console.log(errors); // تطبع الأخطاء فقط عند حدوثها
            },
        });
    };
    /* عرض جداول البيانات و البحث عن مستخدمين*/
    function ShowUserTable(table) {
        if (table) {
            return (
                <>
                    <p>
                        عدد نتائج البحث <span> 25</span>
                    </p>
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
                </>
            );
        }
    }
    /* البحث عن المستخدمين */
    function SerchEmploe(serchEmploeState) {
        if (serchEmploeState) {
            return (
                <div className="flex mx-11 bg-white overflow-hidden shadow-sm sm:rounded-lg p-7">
                    <form className="flex flex-col  w-full">
                        <div className="space-from">
                            {/* الهاتف*/}
                            <div className="style-div-from">
                                <label className="labale-style">الهاتف</label>
                                <input
                                    type="tel"
                                    value={idNumber}
                                    onChange={(e) =>
                                        setIdNumber(e.target.value)
                                    }
                                    className="input-style"
                                    required
                                />
                            </div>
                            {/* البريد الالكتروني */}
                            <div className="style-div-from">
                                <label className="labale-style">
                                    البريد الالكتروني
                                </label>
                                <input
                                    type="email"
                                    value={idNumber}
                                    onChange={(e) =>
                                        setIdNumber(e.target.value)
                                    }
                                    className="input-style"
                                    placeholder="مثال eee@gmail.com"
                                    required
                                />
                            </div>
                            {/* رقم الهوية */}
                            <div className="style-div-from">
                                <label className="labale-style">
                                    رقم الهوية
                                </label>
                                <input
                                    type="text"
                                    value={idNumber}
                                    onChange={(e) =>
                                        setIdNumber(e.target.value)
                                    }
                                    className="input-style"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-from">
                            {/* الحالة*/}
                            <div className="style-div-from">
                                <label className="labale-style">الحالة</label>
                                <select
                                    value={idNumber}
                                    onChange={(e) => setData(e.target.value)}
                                    className="input-style"
                                    required
                                >
                                    <option>الكل</option>
                                    <option value="on">فعال</option>
                                    <option value="off">إيقاف</option>
                                    <option value="block">تم حظرة</option>
                                </select>
                            </div>
                            {/* نوع المستخدم*/}
                            <div className="style-div-from">
                                <label className="labale-style">
                                    نوع المستخدم
                                </label>
                                <select
                                    type="text"
                                    value={idNumber}
                                    onChange={(e) =>
                                        setIdNumber(e.target.value)
                                    }
                                    className="input-style"
                                    required
                                >
                                    <option>الكل</option>
                                    <option value="مستخدم">مستخدم</option>
                                    <option value="مدير النظام">
                                        مدير النظام
                                    </option>
                                </select>
                            </div>
                            {/* رقم الهوية */}
                            <div className="style-div-from">
                                <label className="labale-style">
                                    متاح للتصعيد
                                </label>
                                <select
                                    value={idNumber}
                                    onChange={(e) =>
                                        setIdNumber(e.target.value)
                                    }
                                    className="input-style"
                                    required
                                >
                                    <option>الكل</option>
                                    <option>متاح للتصعيد</option>
                                    <option>غير متاح للتصعيد</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-from justify-end">
                            {/*الجهة*/}
                            <div className="style-div-from">
                                <label className="labale-style">الجهة</label>
                                <select
                                    type="text"
                                    value={idNumber}
                                    onChange={(e) =>
                                        setIdNumber(e.target.value)
                                    }
                                    className="input-style"
                                    required
                                >
                                    <option>اختر الجهة</option>
                                    <option>البلديات</option>
                                    <option>الأمانات</option>
                                    <option>الوكالات</option>
                                    <option>بلديات فرعية</option>
                                    <option>أحياء</option>
                                    <option>قطاعات</option>
                                    <option>جهات أخرى</option>
                                </select>
                            </div>
                            {/* اسم الجهة*/}
                            <div className="style-div-from">
                                <label className="labale-style">
                                    اسم الجهة
                                </label>
                                <select
                                    type="text"
                                    value={idNumber}
                                    onChange={(e) =>
                                        setIdNumber(e.target.value)
                                    }
                                    className="input-style"
                                    required
                                >
                                    <option>اختر الجهة</option>
                                    <option>بلدية الناصفة</option>
                                    <option>بلدية محافظة دومة الجندل</option>
                                    <option>بلدية زلوم</option>
                                    <option>بلدية العيساوية</option>
                                    <option>بلدية محافظة طبرجل</option>
                                    <option>بلدية محافظة القريات</option>
                                    <option>بلدية الحديثة</option>
                                    <option>بلدية آبو عجرم</option>
                                    <option>آمانة منطقة الجوف</option>
                                    <option>بلدية صوير</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex my-6" dir="rtl">
                            <button
                                type="submit"
                                className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ml-3"
                                onClick={() => {
                                    setTable(!table);
                                }}
                            >
                                بحث
                            </button>
                            <button
                                type="submit"
                                className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                onClick={() => {
                                    setSerchEmploe(!SerchEmploe);
                                }}
                            >
                                الغاء
                            </button>
                        </div>
                    </form>
                </div>
            );
        }
    }
    /* عرض اعدات المستخدمين */
    function showUserSeting(user) {
        if (user) {
            return (
                <div className="max-w-7xl mx-auto">
                    <div
                        className="flex justify-center bg-white p-4  "
                        dir="rtl"
                    >
                        <form
                            className="space-y-4 flex flex-col "
                            onSubmit={handleSubmit}
                        >
                            <div className="space-from">
                                {/* اسم الجهة */}
                                <div className="style-div-from">
                                    <label className="labale-style">
                                        اسم الجهة
                                    </label>
                                    <select
                                        value={data.EnterName}
                                        onChange={(e) =>
                                            setData("EnterName", e.target.value)
                                        }
                                        className="input-style"
                                        required
                                    >
                                        <option>اسم الجيه</option>
                                        <option value="بلدية الناصفة">
                                            بلدية الناصفة
                                        </option>
                                        <option value="بلدية محافظة دومة الجنل">
                                            بلدية محافظة دومة الجندل
                                        </option>
                                        <option value="Zaloum">
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
                                        <option value="بلدية صوير">
                                            بلدية صوير
                                        </option>
                                    </select>
                                </div>
                                {/* الجهة */}
                                <div className="style-div-from">
                                    <label className="labale-style">
                                        نوع الجهة
                                    </label>
                                    <select
                                        value={data.entity}
                                        onChange={(e) =>
                                            setData(
                                                "typeOfEnterName",
                                                e.target.value
                                            )
                                        }
                                        className="input-style"
                                        required
                                    >
                                        <option>اختر الجيهة</option>
                                        <option value="البلديات">
                                            البلديات
                                        </option>
                                        <option value="الأمانات">
                                            الأمانات
                                        </option>
                                        <option value="الوكالات">
                                            الوكالات
                                        </option>
                                        <option value="بلديات فرعية">
                                            بلديات فرعية
                                        </option>
                                        <option value="أحياء">أحياء</option>
                                        <option value="قطاعات">قطاعات</option>
                                        <option value="جهات أخري">
                                            جهات أخري
                                        </option>
                                    </select>
                                </div>
                                {/* الحالة */}
                                <div className="style-div-from">
                                    <label className="labale-style">
                                        الحالة
                                    </label>
                                    <select
                                        type="text"
                                        value={data.StateOfUser}
                                        onChange={(e) => {
                                            if (e.target.value == "true") {
                                                setData("StateOfUser", true);
                                            }
                                            if (e.target.value == "false") {
                                                setData("StateOfUser", false);
                                            }
                                        }}
                                        className="input-style"
                                    >
                                        <option value={true}>فعال</option>
                                        <option value={false}>إبقاف</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-from">
                                {/* نوع المستخدم */}
                                <div className="style-div-from">
                                    <label className="labale-style">
                                        نوع المستخدم
                                    </label>
                                    <select
                                        value={data.TybeOfUser}
                                        onChange={(e) =>
                                            setData(
                                                "TybeOfUser",
                                                e.target.value.toString()
                                            )
                                        }
                                        className="input-style"
                                        required
                                    >
                                        <option>اختر</option>
                                        <option value="User">مستخدم</option>
                                    </select>
                                </div>

                                {/* رقم الهوية */}
                                <div className="style-div-from">
                                    <label className="labale-style">
                                        رقم الهوية
                                    </label>
                                    <input
                                        type="text"
                                        value={data.idNumber}
                                        onChange={(e) =>
                                            setData("idNumber", e.target.value)
                                        }
                                        className="input-style"
                                        required
                                    />
                                </div>
                                {/* اسم المستخدم */}
                                <div className="style-div-from">
                                    <label className="labale-style">
                                        اسم المستخدم
                                    </label>
                                    <input
                                        type="text"
                                        value={data.userName}
                                        onChange={(e) =>
                                            setData("userName", e.target.value)
                                        }
                                        className="input-style"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-from">
                                {/* الهاتف */}
                                <div className="style-div-from">
                                    <label className="labale-style">
                                        الهاتف
                                    </label>
                                    <input
                                        type="number"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        className="input-style"
                                        placeholder="XXXX XXX XXO"
                                        required
                                    />
                                </div>
                                {/* البريد الإلكتروني */}
                                <div className="style-div-from">
                                    <label className="labale-style">
                                        البريد الإلكتروني
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            // setEmail(e.target.value)
                                            setData("email", e.target.value)
                                        }
                                        className=" input-style"
                                        required
                                    />
                                </div>
                                {/* الوظيفة */}
                                <div className="style-div-from">
                                    <label className="labale-style">
                                        الوظيفة
                                    </label>
                                    <input
                                        type="text"
                                        value={data.Job}
                                        onChange={(e) =>
                                            setData("Job", e.target.value)
                                        }
                                        className="input-style"
                                    />
                                </div>
                            </div>

                            <div className="space-from flex flex-row align-items-center">
                                {/* الاسم */}
                                <div className="style-div-from">
                                    <label className="labale-style">
                                        الاسم
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="input-style"
                                    />
                                </div>
                                {/* الجنس */}
                                <div className="style-div-from">
                                    <label className="labale-style ">
                                        الجنس
                                    </label>
                                    <select
                                        value={data.gendra}
                                        onChange={(e) => {
                                            if (e.target.value == "true") {
                                                setData("gendra", true);
                                            }
                                            if (e.target.value == "false") {
                                                setData("gendra", false);
                                            }
                                        }}
                                        className="input-style"
                                    >
                                        <option value={true}>ذكر</option>
                                        <option value={false}>أنثى</option>
                                    </select>
                                </div>
                                {/* متاح للتصعيد */}
                                <div
                                    className="style-div-from border flex flex-row-reverse justify-end max-h-[30px] gap-2 h-8 my-3"
                                    dir="rtl"
                                >
                                    <div className="inline-flex items-center">
                                        <label
                                            className="flex items-center cursor-pointer relative"
                                            htmlFor="check-2"
                                            required
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                                                id="check-2"
                                                checked={data.escalation}
                                                onChange={(e) =>
                                                    setData(
                                                        "escalation",
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-3.5 w-3.5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeWidth="1"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </label>
                                        <label
                                            className="cursor-pointer ml-2 text-slate-600 text-sm mx-3"
                                            htmlFor="check-2"
                                        >
                                            متاح للتصعيد
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="space-from justify-between">
                                {/* النماذج */}
                                <div className="style-div-from ">
                                    <label className="labale-style block text-right text-gray-700 mb-1">
                                        النماذج
                                    </label>
                                    <Multiselect
                                        value={data.model}
                                        dir="rtl"
                                        className="input-style"
                                        displayValue="key"
                                        onSelect={function noRefCheck(e) {
                                            console.log(e);
                                            setData("model", e);
                                        }}
                                        options={[
                                            {
                                                cat: "Group 1",
                                                key: "نموذج قياس الأثر الإقتصادي لتنفيذ مبادرة إنشاء وتطوير شبكة الطرق الحضرية (A34-02)",
                                            },
                                            {
                                                cat: "Group 1",
                                                key: "نموذج قياس الأثر الإقتصادي لتنفيذ مبادرة أنسنة المدن (A34-03)",
                                            },
                                            {
                                                cat: "Group 1",
                                                key: "نموذج قياس الأثر الإقتصادي لتنفيذ مبادرة انشاء وتطوير المباني والمرافق البلدية (A34-04)",
                                            },
                                        ]}
                                        required
                                        showCheckbox
                                        placeholder="اختر النماذج"
                                    />
                                </div>
                            </div>
                            {/* زر الإرسال */}
                            <div>
                                <button
                                    type="submit"
                                    className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ml-3"
                                    onClick={handleSubmit}
                                >
                                    حفظ
                                </button>
                                <button
                                    type="submit"
                                    className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                >
                                    الغاء
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div
                    className="font-semibold text-xl text-gray-800 leading-tight flex justify-between items-center flex-wrap"
                    dir="rtl"
                >
                    <h1>قائمة المستخدمين</h1>
                    <button
                        className="bg-gray-600 rounded-full w-36 h-9 text-white font-semibold mt-4"
                        onClick={() => setUserShow(!user)}
                    >
                        <div className="flex gap-3 justify-center items-center">
                            <p className="text-xl">اضافة مستخدم</p>
                        </div>
                    </button>
                </div>
            }
            dir="rtl"
        >
            <Head title="قائمة المستخدمين" />
            <div
                className="flex justify-end mx-11 bg-white px-7 overflow-hidden shadow-sm sm:rounded-lg p-7 m-5 flex-wrap"
                dir=""
            >
                <div className="style-div-from flex-wrap shrink ">
                    <label className="labale-style">بحث بالاسم</label>
                    <input
                        type="text"
                        value={serchValue}
                        onChange={(e) => setSerchValue(!serchValue)}
                        className="input-style justify-center "
                    />
                </div>
                <div className="flex justify-center items-end mx-3">
                    <button
                        className=" font-medium tracking-wide text-white capitalize transition-colors  transform bg-blue-600 rounded-lg h-1/2 p-1 mr-3 min-h-10"
                        onChange={() => setSerchValue(!serchValue)}
                        onClick={() => setSerchEmploe(!serchEmploeState)}
                    >
                        بحث متقدم
                    </button>
                    <button
                        className=" font-medium tracking-wide text-white capitalize transition-colors  transform bg-blue-600 rounded-lg  h-1/2 p-1 min-h-10"
                        onClick={() => setTable(!table)}
                    >
                        بحث
                    </button>
                </div>
            </div>
            <div className="py-12">{showUserSeting(user)}</div>
            {/* عرض اعدات المستخدمين */}
            <div className="py-12">{SerchEmploe(serchEmploeState)}</div>
            {/* البحث عن المستخدمين */}
            <div className="py-12">{ShowUserTable(table)}</div>
            {/* عرض جداول البيانات و البحث عن مستخدمين*/}
        </AuthenticatedLayout>
    );
}
