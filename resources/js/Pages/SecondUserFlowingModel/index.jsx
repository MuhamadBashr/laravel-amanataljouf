import AuthenticatedLayout from "@/EntreUser/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Flex,
    TextField,
    Button,
    Box,
    Grid,
    Select,
    Table,
    Text,
    Badge,
} from "@radix-ui/themes";
import Multiselect from "multiselect-react-dropdown";
import data from "../data/new.json";
import { useState } from "react";
export default function Dashboard(props) {
    const [StateChoceMangmant, setChoceMangmant] = useState([]);
    const [StateChoceMangmant1, setChoceMangman1] = useState([]);

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
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Grid columns="6" gap="3" dir="rtl">
                                <Select.Root size="3">
                                    <Select.Trigger />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Label>
                                                نوع الفترة
                                            </Select.Label>
                                            <Select.Item value="annual">
                                                سنوي
                                            </Select.Item>
                                            <Select.Item value="half- annual">
                                                نصف سنوي
                                            </Select.Item>
                                            <Select.Item value="Quarterly">
                                                ربع سنوي
                                            </Select.Item>
                                            <Select.Item value="period">
                                                فترة
                                            </Select.Item>
                                            <Select.Item value="monthly">
                                                شهري
                                            </Select.Item>
                                        </Select.Group>
                                    </Select.Content>
                                </Select.Root>
                                <TextField.Root
                                    size="3"
                                    placeholder="السنة:2025"
                                    maxLength="4"
                                />
                                <Select.Root size="3">
                                    <Select.Trigger />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Label>النصف</Select.Label>
                                            <Select.Item value="first-half">
                                                النصف الاول
                                            </Select.Item>
                                            <Select.Item value="second-half">
                                                النصف الثاني
                                            </Select.Item>
                                        </Select.Group>
                                    </Select.Content>
                                </Select.Root>
                                <Select.Root size="3">
                                    <Select.Trigger />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Label>الربع</Select.Label>
                                            <Select.Item value="First-quarter">
                                                الربع الاول
                                            </Select.Item>
                                            <Select.Item value="Second-quarter">
                                                الربع الثاني
                                            </Select.Item>
                                            <Select.Item value="Third-quarter">
                                                الربع الثالث
                                            </Select.Item>
                                            <Select.Item value="Fourth-quarter">
                                                الربع الرابع
                                            </Select.Item>
                                        </Select.Group>
                                    </Select.Content>
                                </Select.Root>
                                <Select.Root
                                    size="3"
                                    onValueChange={(value) => {
                                        const result = SarchFlowMangamnt(
                                            data,
                                            value
                                        );
                                        setChoceMangmant(result);
                                    }}
                                >
                                    <Select.Trigger />
                                    <Select.Content>
                                        <Select.Item
                                            value="w2342134"
                                            key="w2342134"
                                        >
                                            مكتب الأمين
                                        </Select.Item>
                                        <Select.Item
                                            value="13b86e89"
                                            key="13b86e89"
                                        >
                                            وكالة الإستثمار
                                        </Select.Item>
                                        <Select.Item
                                            value="1e0cb2a4"
                                            key="1e0cb2a4"
                                        >
                                            وكالة الإسكان
                                        </Select.Item>
                                        <Select.Item
                                            value="c4d4a239"
                                            key="c4d4a239"
                                        >
                                            وكالة التحول الرقمي وإتخاذ القرار
                                        </Select.Item>
                                        <Select.Item
                                            value="99560eba"
                                            key="99560eba"
                                        >
                                            وكالة التخطيط والبرامج
                                        </Select.Item>
                                        <Select.Item
                                            value="0fd76164"
                                            key="0fd76164"
                                        >
                                            وكالة التشغيل والصيانة
                                        </Select.Item>
                                        <Select.Item
                                            value="c12d91fd"
                                            key="c12d91fd"
                                        >
                                            وكالة التعمير والمشاريع
                                        </Select.Item>
                                        <Select.Item
                                            value="ebab591e"
                                            key="ebab591e"
                                        >
                                            وكالة الخدمات البلدية
                                        </Select.Item>
                                        <Select.Item
                                            value="1ef4ccee"
                                            key="1ef4ccee"
                                        >
                                            وكالة المراجعة الداخلية وإحكام
                                            الضوابط الرقابية
                                        </Select.Item>
                                        <Select.Item
                                            value="31fa28ba"
                                            key="31fa28ba"
                                        >
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
                            </Grid>
                            <Flex justify="end" className="my-4">
                                <Button>عرض النماذج</Button>
                            </Flex>
                            <Grid columns="6" gap="3" dir="rtl">
                                <Box className="bg-gray-200">
                                    <Flex
                                        direction="column"
                                        gap="1"
                                        justify="center"
                                        color="gray"
                                    >
                                        <Text size="6" align="center">
                                            2
                                        </Text>
                                        <Text size="6" align="center">
                                            النماذج الإجمالية
                                        </Text>
                                    </Flex>
                                </Box>
                                <Box className="bg-gray-200">
                                    <Flex
                                        direction="column"
                                        gap="1"
                                        justify="center"
                                    >
                                        <Text size="6" align="center">
                                            0
                                        </Text>
                                        <Text size="6" align="center">
                                            نماذج تم نشرها
                                        </Text>
                                    </Flex>
                                </Box>
                                <Box className="bg-gray-200">
                                    <Flex
                                        direction="column"
                                        gap="1"
                                        justify="center"
                                    >
                                        <Text size="6" align="center">
                                            0
                                        </Text>
                                        <Text size="6" align="center">
                                            نماذج تم العمل عليها
                                        </Text>
                                    </Flex>
                                </Box>
                                <Box className="bg-gray-200">
                                    <Flex
                                        direction="column"
                                        gap="1"
                                        justify="center"
                                    >
                                        <Text size="6" align="center">
                                            0
                                        </Text>
                                        <Text size="6" align="center">
                                            نماذج لم يتم العمل عليها
                                        </Text>
                                    </Flex>
                                </Box>
                                <Box className="bg-gray-200">
                                    <Flex
                                        direction="column"
                                        gap="1"
                                        justify="center"
                                    >
                                        <Text size="6" align="center">
                                            2
                                        </Text>
                                        <Text size="6" align="center">
                                            نماذج تم إعتمادها
                                        </Text>
                                    </Flex>
                                </Box>
                                <Box className="bg-gray-200">
                                    <Flex
                                        direction="column"
                                        gap="1"
                                        justify="center"
                                    >
                                        <Text size="6" align="center">
                                            0
                                        </Text>
                                        <Text size="6" align="center">
                                            نماذج تم رفضها
                                        </Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Button>تصدير البيانات</Button>
                                </Flex>
                            </Grid>
                            <Table.Root direction="rtl">
                                <Table.Header>
                                    <Table.Row>
                                        {/* <Table.ColumnHeaderCell>
                                            الكود
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            الاسم
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            الجهات
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            الجهة
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            نوع الفترة
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            الفترة
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            السنة
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            الحالة
                                        </Table.ColumnHeaderCell> */}
                                        <Table.ColumnHeaderCell>
                                            الحالة
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            السنة
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            الفترة
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            نوع الفترة
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            الجهة
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            الجهات
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
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <Badge>تم الإعتماد الأولي</Badge>
                                        </Table.RowHeaderCell>
                                        <Table.Cell>2025</Table.Cell>
                                        <Table.Cell>يناير</Table.Cell>
                                        <Table.RowHeaderCell>
                                            شهري
                                        </Table.RowHeaderCell>
                                        <Table.Cell>
                                            أمانة منطقة الجوف
                                        </Table.Cell>
                                        <Table.Cell>أمانات</Table.Cell>
                                        <Table.RowHeaderCell>
                                            المنجز الشهري للأنشطة القطاع البلدي
                                            في معالجة التشوه البصري
                                        </Table.RowHeaderCell>
                                        <Table.Cell>A30</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table.Root>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
