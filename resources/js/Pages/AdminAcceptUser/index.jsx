import AuthenticatedLayout from "@/AdminLayouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Menu } from "@headlessui/react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { Table, Button, AlertDialog, Flex, Theme } from "@radix-ui/themes";
export default function Dashboard(props) {
    const { Root, Header, Row, ColumnHeaderCell, RowHeaderCell, Cell, Body } =
        Table;
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2
                    className="font-semibold text-xl text-gray-800 leading-tight"
                    dir="rtl"
                >
                    اعتماد النماذج
                </h2>
            }
            dir="rtl"
        >
            <Head title="Dashboard" />
            <div>
                <div
                    className="flex justify-end mx-11 bg-white px-7 overflow-hidden shadow-sm sm:rounded-lg p-7 m-5 flex-wrap"
                    dir=""
                >
                    <div className="style-div-from flex-wrap shrink ">
                        <label className="labale-style">اسم المستخدم</label>
                        <input
                            type="text"
                            className="input-style justify-center"
                            placeholder="ادخل اسم المستخدم"
                        />
                    </div>
                    <div className="flex justify-center items-end mx-3">
                        <Button className=" font-medium tracking-wide text-white capitalize transition-colors  transform bg-blue-600 rounded-lg h-1/2 p-1 mr-3 min-h-10">
                            بحث
                        </Button>
                    </div>
                </div>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <Root>
                                    <Header>
                                        <Row dir="rtl">
                                            <ColumnHeaderCell>
                                                اسم
                                            </ColumnHeaderCell>
                                            <ColumnHeaderCell>
                                                اسم المستخدم
                                            </ColumnHeaderCell>
                                            <ColumnHeaderCell>
                                                رقم الجوال
                                            </ColumnHeaderCell>
                                            <ColumnHeaderCell>
                                                البريد الإلكتروني
                                            </ColumnHeaderCell>
                                            <ColumnHeaderCell></ColumnHeaderCell>
                                            <ColumnHeaderCell></ColumnHeaderCell>
                                            <ColumnHeaderCell></ColumnHeaderCell>
                                        </Row>
                                    </Header>
                                    <Body>
                                        <Row>
                                            <Cell>محمدبشر أمجد عبو</Cell>
                                            {/* اسم */}
                                            <Cell>@muhamadbashr</Cell>
                                            {/* اسم المستخدم */}
                                            <Cell>0502566462</Cell>
                                            {/* رقم الجوال */}
                                            <Cell>a7007001@gmail.com</Cell>
                                            {/* البريد الإلكتروني*/}
                                            <Cell>
                                                <Button>اعتماد</Button>
                                            </Cell>
                                            <Cell>
                                                <Button>رفض</Button>
                                            </Cell>

                                            <Cell>
                                                <AlertDialog.Root>
                                                    <AlertDialog.Trigger>
                                                        <Button>عرض</Button>
                                                    </AlertDialog.Trigger>
                                                    <AlertDialog.Content maxWidth="500px">
                                                        <Root>
                                                            <Header>
                                                                <ColumnHeaderCell>
                                                                    اسم الجهة
                                                                </ColumnHeaderCell>
                                                                <ColumnHeaderCell>
                                                                    نوع الجهة
                                                                </ColumnHeaderCell>
                                                                <ColumnHeaderCell>
                                                                    الحالة
                                                                </ColumnHeaderCell>
                                                                <ColumnHeaderCell>
                                                                    نوع المستخدم
                                                                </ColumnHeaderCell>
                                                                <ColumnHeaderCell>
                                                                    رقم الهوية
                                                                </ColumnHeaderCell>
                                                                <ColumnHeaderCell>
                                                                    الوظيفة
                                                                </ColumnHeaderCell>
                                                                <ColumnHeaderCell>
                                                                    الجنس
                                                                </ColumnHeaderCell>
                                                                <ColumnHeaderCell>
                                                                    متاح للتصعيد
                                                                </ColumnHeaderCell>
                                                                <ColumnHeaderCell>
                                                                    <Flex justify="center">
                                                                        النماج
                                                                    </Flex>
                                                                </ColumnHeaderCell>
                                                            </Header>
                                                            <Body>
                                                                <Cell>
                                                                    بلدية محافظة
                                                                    دومة الجندل
                                                                </Cell>
                                                                <Cell>
                                                                    البلديات
                                                                </Cell>
                                                                <Cell>
                                                                    فعال
                                                                </Cell>
                                                                <Cell>
                                                                    مستخدم
                                                                </Cell>
                                                                <Cell>
                                                                    2110824543
                                                                </Cell>
                                                                <Cell>
                                                                    ضابة اتصال
                                                                </Cell>
                                                                <Cell>ذكر</Cell>
                                                                <Cell>
                                                                    مصعد
                                                                </Cell>
                                                                <RowHeaderCell>
                                                                    <Cell>
                                                                        A09
                                                                    </Cell>
                                                                    <Cell>
                                                                        A08
                                                                    </Cell>
                                                                    <Cell>
                                                                        A07
                                                                    </Cell>
                                                                </RowHeaderCell>
                                                            </Body>
                                                            <Theme dir="rtl">
                                                                <Flex
                                                                    gap="3"
                                                                    justify="center"
                                                                    className="my-8"
                                                                >
                                                                    <AlertDialog.Cancel>
                                                                        <Button>
                                                                            الغاء
                                                                        </Button>
                                                                    </AlertDialog.Cancel>
                                                                    <AlertDialog.Action>
                                                                        <Button>
                                                                            قبول
                                                                        </Button>
                                                                    </AlertDialog.Action>
                                                                </Flex>
                                                            </Theme>
                                                        </Root>
                                                    </AlertDialog.Content>
                                                </AlertDialog.Root>
                                            </Cell>
                                        </Row>
                                    </Body>
                                </Root>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
