import AuthenticatedLayout from "@/DepartmentManagerUser/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Menu } from "@headlessui/react";
import {
    Table,
    Button,
    AlertDialog,
    Flex,
    Theme,
    Text,
    Box,
    TextField,
    Select,
    Badge,
} from "@radix-ui/themes";
import { useState } from "react";
export default function Dashboard(props) {
    const [ShowSarchValue, setShowSet] = useState(false);
    function ShowSarch(value) {
        if (ShowSarchValue) {
            return (
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg my-4">
                    <div className="p-6 text-gray-900">
                        <Flex gap="3" justify="between">
                            <Flex gap="3">
                                <Button>تقرير تفصيلي</Button>
                                <Button>تقرير إجمالي</Button>
                            </Flex>
                            <Flex gap="1" dir="rtl">
                                <Text size="3">عرض نموذج:-</Text>
                                <Text size="3">نموذج pmo</Text>
                            </Flex>
                        </Flex>
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
                <h2
                    className="font-semibold text-xl text-gray-800 leading-tight"
                    dir="rtl"
                >
                    التقارير
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Flex justify="end">
                                <Text as="p">قائمة التقارير</Text>
                            </Flex>
                            <Flex justify="end" align gap="3">
                                <Button size="3">البحث</Button>
                                <Box size="3">
                                    <Select.Root
                                        defaultValue="SelectTheModel"
                                        size="3"
                                        className="min-w-[300px] max-w-[300px]"
                                    >
                                        <Select.Trigger />
                                        <Select.Content>
                                            <Select.Item value="SelectTheModel">
                                                أختير النموذج
                                            </Select.Item>
                                            <Select.Item value="A23">
                                                التحديات والحلول خلال الربع
                                                المالي (A23)
                                            </Select.Item>
                                            <Select.Item value="D1010">
                                                الزيارات المكتبية حسب المناطق
                                                للمنشآت خلال الربع السنوي
                                                (D1010)
                                            </Select.Item>
                                        </Select.Content>
                                    </Select.Root>
                                </Box>
                                <Box maxWidth="300px" className="ml-3">
                                    <TextField.Root
                                        size="3"
                                        placeholder="كلمة البحث"
                                        dir="rtl"
                                    />
                                </Box>
                            </Flex>
                            <Flex
                                align="center"
                                gap="2"
                                dir="rtl"
                                className="my-3"
                            >
                                <Badge size="1" color="indigo">
                                    <Badge size="4" color="indigo">
                                        عدد نتائج البحث
                                    </Badge>
                                    <Badge size="4" color="indigo">
                                        453
                                    </Badge>
                                </Badge>
                            </Flex>
                            <Table.Root variant="surface">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.ColumnHeaderCell>
                                            العمليات
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            الحالة
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            تاريخ الانشاء
                                        </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>
                                            النموذج
                                        </Table.ColumnHeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <Button
                                                onClick={() => {
                                                    setShowSet(!ShowSarchValue);
                                                }}
                                            >
                                                عرض
                                            </Button>
                                        </Table.RowHeaderCell>
                                        <Table.Cell>
                                            <Badge size="4" color="indigo">
                                                فعال
                                            </Badge>
                                        </Table.Cell>
                                        <Table.Cell>
                                            03/10/2025 2:34:58 PM{" "}
                                        </Table.Cell>
                                        <Table.Cell>نموذج pmo</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table.Root>
                        </div>
                    </div>
                    {ShowSarch()}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
