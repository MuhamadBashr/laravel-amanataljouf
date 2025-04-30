import AuthenticatedLayout from "@/AdminLayouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
// import { useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import json from "../data/new.json";
import {
    Table,
    Button,
    AlertDialog,
    Flex,
    Theme,
    Grid,
    TextField,
    Select,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useForm as UseForm, Controller } from "react-hook-form";
export default function Dashboard(props) {
    const onSubmit = (data) => {
        // console.log(data);
        Inertia.post("/admin/AdminCreateSecondUser", data);
    };
    const { control, register, handleSubmit } = UseForm({});
    // const { data, setData, post, processing, errors } = useForm({
    //     FirstName: "",
    //     SacandName: "",
    //     Phone: "",
    //     Email: "",
    //     ID_CARD: "",
    // });
    // const [position, setPosition] = useState({});
    const [StateChoceMangmant, setChoceMangmant] = useState([]);
    const [StateChoceMangmant1, setChoceMangman1] = useState([]);
    // setPosition(data);
    function SarchFlowMangamnt(data, id) {
        console.log(id);
        let allMangamnt = Object.values(data);
        let ChoceMangamnt = [];
        allMangamnt.forEach((item, index, arr) => {
            if (item.flowFor == id) {
                ChoceMangamnt.push(item);
            }
        });
        return ChoceMangamnt;
    }
    useEffect(() => {
        // setChoceMangmant(SarchFlowMangamnt(data, "w2342134"));
        // console.log(StateChoceMangmant);
        // console.log(position);
    }, [json]);
    console.log(StateChoceMangmant);
    useEffect(() => {
        console.log("تم التحديث:", StateChoceMangmant);
    }, [StateChoceMangmant]);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2
                    className="font-semibold text-xl text-gray-800 leading-tight"
                    dir="rtl"
                >
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            className="p-6 text-gray-900"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Grid
                                columns="3"
                                gap="3"
                                rows="repeat(2, 64px)"
                                width="auto"
                                dir="rtl"
                            >
                                <TextField.Root
                                    type="text"
                                    size="3"
                                    placeholder="الاسم الاول"
                                    name="FirstName"
                                    {...register("FirstName")}
                                />
                                <TextField.Root
                                    type="text"
                                    size="3"
                                    placeholder="الاسم الثاني"
                                    name="SecondName"
                                    {...register("SecondName")}
                                />
                                <TextField.Root
                                    type="phone"
                                    size="3"
                                    placeholder="رقم الجوال"
                                    name="Phone"
                                    {...register("Phone")}
                                />
                                <TextField.Root
                                    type="email"
                                    size="3"
                                    placeholder="الإيميل"
                                    name="Email"
                                    {...register("Email")}
                                />
                                <TextField.Root
                                    type="number"
                                    size="3"
                                    placeholder="الهويه"
                                    name="ID_CARD"
                                    {...register("ID_CARD")}
                                />
                                <Controller
                                    // name="select"
                                    // control={control}
                                    control={control}
                                    name="Agencies"
                                    render={({ field }) => {
                                        return (
                                            <Select.Root
                                                size="3"
                                                onValueChange={(value) => {
                                                    const result =
                                                        SarchFlowMangamnt(
                                                            json,
                                                            value
                                                        );
                                                    setChoceMangmant(result);
                                                    field.onChange(value);
                                                }}
                                                dir="rtl"
                                                defaultValue="w2342134"
                                            >
                                                <Select.Trigger />
                                                <Select.Content dir="rtl">
                                                    <Select.Group>
                                                        <Select.Label dir="rtl">
                                                            الوكالات و الأمانات
                                                        </Select.Label>
                                                        <Select.Item
                                                            value="w2342134"
                                                            key="w2342134"
                                                            dir="rtl"
                                                        >
                                                            مكتب الأمين
                                                        </Select.Item>
                                                        <Select.Item
                                                            value="13b86e89"
                                                            key="13b86e89"
                                                            dir="rtl"
                                                        >
                                                            وكالة الإستثمار
                                                        </Select.Item>
                                                        <Select.Item
                                                            value="1e0cb2a4"
                                                            key="1e0cb2a4"
                                                            dir="rtl"
                                                        >
                                                            وكالة الإسكان
                                                        </Select.Item>
                                                        <Select.Item
                                                            value="c4d4a239"
                                                            key="c4d4a239"
                                                            dir="rtl"
                                                        >
                                                            وكالة التحول الرقمي
                                                            وإتخاذ القرار
                                                        </Select.Item>
                                                        <Select.Item
                                                            value="99560eba"
                                                            key="99560eba"
                                                            dir="rtl"
                                                        >
                                                            وكالة التخطيط
                                                            والبرامج
                                                        </Select.Item>
                                                        <Select.Item
                                                            value="0fd76164"
                                                            key="0fd76164"
                                                            dir="rtl"
                                                        >
                                                            وكالة التشغيل
                                                            والصيانة
                                                        </Select.Item>
                                                        <Select.Item
                                                            value="c12d91fd"
                                                            key="c12d91fd"
                                                            dir="rtl"
                                                        >
                                                            وكالة التعمير
                                                            والمشاريع
                                                        </Select.Item>
                                                        <Select.Item
                                                            value="ebab591e"
                                                            key="ebab591e"
                                                            dir="rtl"
                                                        >
                                                            وكالة الخدمات
                                                            البلدية
                                                        </Select.Item>
                                                        <Select.Item
                                                            value="1ef4ccee"
                                                            key="1ef4ccee"
                                                            dir="rtl"
                                                        >
                                                            وكالة المراجعة
                                                            الداخلية وإحكام
                                                            الضوابط الرقابية
                                                        </Select.Item>
                                                        <Select.Item
                                                            value="31fa28ba"
                                                            key="31fa28ba"
                                                            dir="rtl"
                                                        >
                                                            وكالة شؤون بلديات
                                                            المنطقة
                                                        </Select.Item>
                                                    </Select.Group>
                                                </Select.Content>
                                            </Select.Root>
                                        );
                                    }}
                                />
                                {/* <Controller /> */}
                                <Controller
                                    // name="select"
                                    // control={control}
                                    control={control}
                                    name="Departments"
                                    render={({ field }) => {
                                        return (
                                            <Select.Root
                                                size="3"
                                                defaultValue=""
                                                dir="rtl"
                                                // {...register("management")}
                                                onValueChange={(value) => {
                                                    field.onChange(value);
                                                }}
                                            >
                                                <Select.Trigger />
                                                <Select.Content>
                                                    {StateChoceMangmant.map(
                                                        (agency) => {
                                                            return (
                                                                <Select.Item
                                                                    value={
                                                                        agency.Id_Mangamnt
                                                                    }
                                                                    key={
                                                                        agency.Id_Mangamnt
                                                                    }
                                                                    dir="rtl"
                                                                >
                                                                    {
                                                                        agency.name
                                                                    }
                                                                </Select.Item>
                                                            );
                                                        }
                                                    )}
                                                </Select.Content>
                                            </Select.Root>
                                        );
                                    }}
                                />
                            </Grid>
                            <Flex justify="end" className="my-2">
                                <Button type="submit">حفظ</Button>
                            </Flex>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
