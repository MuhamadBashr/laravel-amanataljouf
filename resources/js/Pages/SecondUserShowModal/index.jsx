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
    Card,
    Link,
    Tabs,
    Separator,
} from "@radix-ui/themes";
import { MultiSelect } from "primereact/multiselect";
import { useState } from "react";
import { useForm as UseForm, Controller } from "react-hook-form";
export default function Dashboard(props) {
    // const { register, handleSubmit } = UseForm();
    const onSubmit = (data) => console.log(data);
    const options = [
        {
            name: "نموذج قياس الأثر الإقتصادي لتنفيذ مبادرة إنشاء وتطوير شبكة الطرق الحضرية (A34-02)",
            id: 1,
        },
        {
            name: "نموذج قياس الأثر الإقتصادي لتنفيذ مبادرة أنسنة المدن (A34-03)",
            id: 2,
        },
        {
            name: "نموذج قياس الأثر الإقتصادي لتنفيذ مبادرة انشاء وتطوير المباني والمرافق البلدية (A34-04)",
            id: 3,
        },
    ];
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [StateShowCard, setStateShowCard] = useState(false);
    // const [numberS, setNumberS] = useState(0);
    const [showSarch, setShowSarch] = useState(false);
    const [showSerchAdvanceForm, setShowSerchAdvanceForm] = useState(false);
    const [ShowFormState, setShowFormState] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = UseForm();
    function FshowSerchAdvanceForm() {
        if (showSerchAdvanceForm) {
            return (
                <Grid columns="5" justify="end" gap="3" dir="rtl">
                    <Select.Root size="3" defaultValue="اختر السنة">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Group>
                                <Select.Label>السنة</Select.Label>
                                <Select.Item disabled value="اختر السنة">
                                    اختر السنة
                                </Select.Item>
                                <Select.Item value="2025">2025</Select.Item>
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                    <Select.Root size="3" defaultValue="half">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Group>
                                <Select.Item value="half" disabled>
                                    النصف
                                </Select.Item>
                                <Select.Item value="Fhalf">
                                    النصف الاول
                                </Select.Item>
                                <Select.Item value="Shalf">
                                    النصف الثاني
                                </Select.Item>
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                    <Select.Root size="3" defaultValue="quterLabel">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Group>
                                <Select.Item value="quterLabel" disabled>
                                    اختر الربع
                                </Select.Item>
                                <Select.Item value="Fquter">
                                    الربع الاول
                                </Select.Item>
                                <Select.Item value="Squter">
                                    الربع الثاني
                                </Select.Item>
                                <Select.Item value="Tquter">
                                    الربع الثالث
                                </Select.Item>
                                <Select.Item value="Equter">
                                    الربع الرابع
                                </Select.Item>
                                {/*Equter الربع الأخير */}
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                    <Select.Root size="3" defaultValue="monthLabal">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Group>
                                <Select.Item value="monthLabal" disabled>
                                    اختر الشهر
                                </Select.Item>
                                <Select.Item value="month1">محرم</Select.Item>
                                <Select.Item value="month2">صفر</Select.Item>
                                <Select.Item value="month3">محرم</Select.Item>
                                <Select.Item value="month4">صفر</Select.Item>
                                <Select.Item value="month5">محرم</Select.Item>
                                <Select.Item value="month6">صفر</Select.Item>
                                <Select.Item value="month7">محرم</Select.Item>
                                <Select.Item value="month8">صفر</Select.Item>
                                <Select.Item value="month9">محرم</Select.Item>
                                <Select.Item value="month10">صفر</Select.Item>
                                <Select.Item value="month11">محرم</Select.Item>
                                <Select.Item value="month12">صفر</Select.Item>
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                    <Button
                        size="3"
                        onClick={() => {
                            console.log("ggg");
                            setShowFormState(!ShowFormState);
                        }}
                    >
                        عرض النتائج
                    </Button>
                </Grid>
            );
        }
    }
    function ShowSerchInForm(e) {
        if (e.target.textContent) {
            setShowSerchAdvanceForm(!showSerchAdvanceForm);
        }
        // setStateShowCard(false);
    }
    function ShowSerchCard() {
        if (StateShowCard) {
            return (
                <Grid
                    justify="end"
                    className="py-6 px-3"
                    gap="3"
                    columns="3"
                    weight="light"
                    dir="rtl"
                >
                    <Box>
                        <Link
                            onClick={(e) => {
                                ShowSerchInForm(e);
                            }}
                        >
                            <Card className="flex justify-center">
                                <Text
                                    as="text"
                                    className="z-[-2]"
                                    value="نموذج pmo"
                                    id="نموذج pmo"
                                >
                                    نموذج pmo
                                </Text>
                            </Card>
                        </Link>
                    </Box>
                </Grid>
            );
        }
    }
    function ShowSarchAdvace() {
        if (showSarch) {
            return (
                <Flex
                    columns="3"
                    gap="3"
                    direction="column"
                    className="bg-gray-100"
                >
                    <Grid
                        justify="end"
                        className="py-6 px-3"
                        gap="3"
                        columns="3"
                    >
                        <Select.Root defaultValue="نوع النموذج" size="3">
                            <Select.Trigger />
                            <Select.Content>
                                <Select.Group>
                                    <Select.Label>نوع النموذج</Select.Label>
                                    <Select.Item value="نوع النموذج">
                                        نوع النموذج
                                    </Select.Item>
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                        <Select.Root defaultValue="نوع الفترة" size="3">
                            <Select.Trigger />
                            <Select.Content>
                                <Select.Group>
                                    <Select.Label>نوع الفترة</Select.Label>
                                    <Select.Item value="نوع الفترة">
                                        نوع الفترة
                                    </Select.Item>
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                        <TextField.Root size="3" placeholder="الوصف" />
                    </Grid>
                    <Flex gap="3" className="p-3">
                        <Button>إلغاء</Button>
                        <Button>بحث</Button>
                    </Flex>
                </Flex>
            );
        }
    }
    {
        /* هنا يتم اظهار ادخال النماذج */
    }
    function ShowFormEnter() {
        if (ShowFormState) {
            return (
                <form>
                    <Tabs.Root defaultValue="account" dir="rtl">
                        <Tabs.List>
                            <Tabs.Trigger value="account">
                                نوذج pmo
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Separator orientation="vertical" />
                        <Box pt="3">
                            <Tabs.Content value="account">
                                <Table.Root>
                                    <Table.Header>
                                        <Table.Row dir="rtl">
                                            <Table.ColumnHeaderCell>
                                                الكمية الصادرة من لحوم و أسماك و
                                                دواجن(كجم)
                                            </Table.ColumnHeaderCell>
                                            <Table.ColumnHeaderCell>
                                                الكميمة المصادرة من لحوم و أسماك
                                                و دواجن(علبة)
                                            </Table.ColumnHeaderCell>
                                            <Table.ColumnHeaderCell>
                                                الكمية المصادرة الدقيق و مشتقاته
                                            </Table.ColumnHeaderCell>
                                            <Table.ColumnHeaderCell>
                                                الكمية الصادرة من لحوم و أسماك و
                                                دواجن(كجم)
                                            </Table.ColumnHeaderCell>
                                            <Table.ColumnHeaderCell>
                                                الكميمة المصادرة من لحوم و أسماك
                                                و دواجن(علبة)
                                            </Table.ColumnHeaderCell>
                                            <Table.ColumnHeaderCell>
                                                الكمية المصادرة الدقيق و مشتقاته
                                            </Table.ColumnHeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>
                                                <TextField.Root
                                                    size="3"
                                                    type="number"
                                                />
                                            </Table.Cell>
                                            <Table.Cell>
                                                <TextField.Root
                                                    size="3"
                                                    type="number"
                                                />
                                            </Table.Cell>
                                            <Table.Cell>
                                                <TextField.Root
                                                    size="3"
                                                    type="number"
                                                />
                                            </Table.Cell>
                                            <Table.Cell>
                                                <TextField.Root
                                                    size="3"
                                                    type="number"
                                                />
                                            </Table.Cell>
                                            <Table.Cell>
                                                <TextField.Root
                                                    size="3"
                                                    type="number"
                                                />
                                            </Table.Cell>
                                            <Table.Cell>
                                                <TextField.Root
                                                    size="3"
                                                    type="number"
                                                />
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table.Root>
                            </Tabs.Content>
                        </Box>
                        <Flex justify="right" className="my-3">
                            <Button>حفظ</Button>
                        </Flex>
                    </Tabs.Root>
                </form>
            );
        }
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Flex justify="end" gap="3">
                                    <Button
                                        onClick={() => {
                                            setShowSarch(!showSarch);
                                        }}
                                    >
                                        بحث متقدم
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setStateShowCard(!StateShowCard);
                                        }}
                                    >
                                        بحث
                                    </Button>
                                    <Box dir="rtl" minWidth="300px">
                                        <Controller
                                            control={control}
                                            name="selectValueMulte"
                                            render={({ field }) => (
                                                <MultiSelect
                                                    value={selectedCities}
                                                    onChange={(e) => {
                                                        console.log(e.value);
                                                        setSelectedCities(
                                                            e.value
                                                        );
                                                        field.onChange(e.value);
                                                    }}
                                                    maxSelectedLabels={0}
                                                    filter
                                                    options={options}
                                                    optionLabel="name"
                                                    placeholder="اختر النماذج"
                                                    className="w-full md:w-20rem"
                                                    display="chip"
                                                    // selectedItemTemplate={(e) => {
                                                    //     console.log(selectedOptions);
                                                    // }}

                                                    // virtualScrollerOptions={{
                                                    //     itemSize: 43,
                                                    // }}
                                                    selectedItemsLabel={`لقد اخترت ${selectedCities.length}`}
                                                />
                                            )}
                                        />
                                    </Box>
                                </Flex>
                            </form>
                            {/* البحث المتقدم */}
                            {ShowSarchAdvace()}
                            {ShowSerchCard()}
                            {/**هنا يتم البحث */}
                            {FshowSerchAdvanceForm()}
                            {/* هنا يتم اظهار ادخال النماذج */}
                            {ShowFormEnter()}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
