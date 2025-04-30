import AuthenticatedLayout from "@/DepartmentManagerUser/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Menu } from "@headlessui/react";
import {
    Flex,
    TextField,
    Button,
    Box,
    Grid,
    Select,
    Table,
} from "@radix-ui/themes";
import data from "../data/new.json";
import { useState } from "react";
export default function Dashboard(props) {
    const [StateChoceMangmant, setChoceMangmant] = useState([]);
    const [ShowAdvaceSarch, setShowAdvaceSarch] = useState(false);
    const [ShowTableState, setShowTable] = useState(false);
    function ShawTable() {
        if (ShowTableState) {
            return (
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            {/* <Table.ColumnHeaderCell>
                                الكود
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                الاسم
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                نوع النموذج
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                الجهة
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                نوع الفترة
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                السنة
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                الفترة
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                تاريخ الانشاء
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                العمليات
                            </Table.ColumnHeaderCell> */}
                            <Table.ColumnHeaderCell>
                                العمليات
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                تاريخ الانشاء
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                الفترة
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                السنة
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                نوع الفترة
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                الجهة
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                نوع النموذج
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                الاسم
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                الكود
                            </Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row></Table.Row>
                    </Table.Body>
                </Table.Root>
            );
        }
    }
    function FunShowAdvaceSarch() {
        if (ShowAdvaceSarch) {
            return (
                <Grid columns="3" gap="3" className="my-2" dir="rtl">
                    <TextField.Root size="3" placeholder="الوصف" />
                    <TextField.Root size="3" placeholder="السنة" />
                    <Select.Root size="3" defaultValue="نوع الفترة">
                        <Select.Trigger />
                        <Select.Content>
                            {/* نوع الفترة سنوى يرجى البحث لا نصف سنوى
                                        ربع سنوي فترة */}
                            <Select.Group>
                                <Select.Label value="نوع الفترة">
                                    نوع الفترة
                                </Select.Label>
                                <Select.Item value="سنوى">سنوى</Select.Item>
                                <Select.Item value="نصف سنوى">
                                    نصف سنوى
                                </Select.Item>
                                <Select.Item value="ربع سنوي">
                                    ربع سنوي فترة
                                </Select.Item>
                                <Select.Item value="فترة">فترة</Select.Item>
                                <Select.Item value="شهري">شهري</Select.Item>
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                    <Select.Root size="3" defaultValue="جدولى">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Group>
                                <Select.Label value="نوع النموذج">
                                    نوع النموذج
                                </Select.Label>
                                <Select.Item value="جدولى">جدولى</Select.Item>
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                    <Select.Root size="3" defaultValue="حالة النموذج">
                        <Select.Trigger />
                        <Select.Content>
                            {/* نوع الفترة سنوى يرجى البحث لا نصف سنوى
                                        ربع سنوي فترة */}
                            <Select.Group>
                                <Select.Label>حالة النموذج</Select.Label>
                                <Select.Item value=" تم الاعتماد">
                                    تم الاعتماد
                                </Select.Item>
                                <Select.Item value="تم الرفض">
                                    تم الرفض
                                </Select.Item>
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                    <Select.Root
                        size="3"
                        onValueChange={(value) => {
                            const result = SarchFlowMangamnt(data, value);
                            setChoceMangmant(result);
                        }}
                    >
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Item value="w2342134" key="w2342134">
                                مكتب الأمين
                            </Select.Item>
                            <Select.Item value="13b86e89" key="13b86e89">
                                وكالة الإستثمار
                            </Select.Item>
                            <Select.Item value="1e0cb2a4" key="1e0cb2a4">
                                وكالة الإسكان
                            </Select.Item>
                            <Select.Item value="c4d4a239" key="c4d4a239">
                                وكالة التحول الرقمي وإتخاذ القرار
                            </Select.Item>
                            <Select.Item value="99560eba" key="99560eba">
                                وكالة التخطيط والبرامج
                            </Select.Item>
                            <Select.Item value="0fd76164" key="0fd76164">
                                وكالة التشغيل والصيانة
                            </Select.Item>
                            <Select.Item value="c12d91fd" key="c12d91fd">
                                وكالة التعمير والمشاريع
                            </Select.Item>
                            <Select.Item value="ebab591e" key="ebab591e">
                                وكالة الخدمات البلدية
                            </Select.Item>
                            <Select.Item value="1ef4ccee" key="1ef4ccee">
                                وكالة المراجعة الداخلية وإحكام الضوابط الرقابية
                            </Select.Item>
                            <Select.Item value="31fa28ba" key="31fa28ba">
                                وكالة شؤون بلديات المنطقة
                            </Select.Item>
                        </Select.Content>
                    </Select.Root>
                    <Select.Root size="3" defaultValue="">
                        <Select.Trigger />
                        <Select.Content>
                            {StateChoceMangmant.map((agency) => {
                                return (
                                    <Select.Item
                                        value={agency.Id_Mangamnt}
                                        key={agency.Id_Mangamnt}
                                    >
                                        {agency.name}
                                    </Select.Item>
                                );
                            })}
                        </Select.Content>
                    </Select.Root>

                    <Flex gap="3">
                        <Box>
                            <Button
                                onClick={() => {
                                    ShawTable(true);
                                }}
                                className="max-w-[300px]"
                            >
                                {" "}
                                بحث
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                className="max-w-[300px]"
                                onClick={() => {
                                    ShawTable(false);
                                }}
                            >
                                الغاء
                            </Button>
                        </Box>
                    </Flex>
                </Grid>
            );
        }
    }
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
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2
                    className="font-semibold text-xl text-gray-800 leading-tight"
                    dir="rtl"
                >
                    تقرير
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Flex justify="end">
                                <Flex dir="rtl" gap="3">
                                    <Box maxWidth="1000px">
                                        <TextField.Root
                                            size="3"
                                            placeholder="بحث بالاسم أو الكود"
                                        />
                                    </Box>
                                    <Button
                                        onClick={() => {
                                            setShowTable(!ShowTableState);
                                        }}
                                    >
                                        بحث
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setShowAdvaceSarch(
                                                !ShowAdvaceSarch
                                            );
                                        }}
                                    >
                                        بحث متقدم
                                    </Button>
                                </Flex>
                            </Flex>
                            {FunShowAdvaceSarch()}
                            {ShawTable()}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
