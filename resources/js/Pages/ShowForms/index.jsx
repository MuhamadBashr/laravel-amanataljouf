import React from "react";
import {
    Tabs,
    Box,
    Text,
    Table,
    TextField,
    Button,
    Flex,
    Avatar,
} from "@radix-ui/themes";
// import { Button } from "react-bootstrap";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import logo from "./jouf_logo.png";
import logo2030 from "./logo2030.png";
import logoMh from "./mhSvg.svg";
import { ReactSVG } from "react-svg";
import { useForm as UseForm, Controller } from "react-hook-form";
export default function Index(props) {
    const onSubmit = (data) => console.log(data);
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = UseForm();
    // نفترض أنّ props.form[0].Filed_Forms هو JSON Array
    const forms = JSON.parse(props.form[0].Filed_Forms);

    // أوّل قيمة لفتحها افتراضيًّا
    const firstValue = forms.length ? forms[0].name : "";

    return (
        <>
            <nav
                className="bg-white shadow px-4 py-2 flex items-center justify-between "
                dir="rtl"
            >
                <Flex justify="between" className="w-full bg-[#f8fafc]">
                    <a href="#" className="font-bold text-indigo-600">
                        <Flex gap="3">
                            <Avatar src={logo} fallback="A" size="5" />
                            <Avatar src={logo2030} fallback="A" size="5" />
                        </Flex>
                    </a>
                    {/* <input type="checkbox" id="nav-toggle" class="hidden peer"> */}
                    <img
                        src={logoMh}
                        alt="شاطئ جميل وقت الغروب"
                        className="rounded-2xl max-w-full h-auto"
                        width="200px"
                    />
                </Flex>
            </nav>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Tabs.Root defaultValue={firstValue} className="my-10">
                    {/* قائمة التوبات */}

                    <Tabs.List dir="rtl">
                        {forms.map((form) => (
                            <Tabs.Trigger key={form.name} value={form.name}>
                                {form.title ?? form.name}
                            </Tabs.Trigger>
                        ))}
                    </Tabs.List>

                    <Box pt="3">
                        {forms.map((form) => (
                            <Tabs.Content
                                key={form.name}
                                value={form.name}
                                dir="rtl"
                            >
                                {/* محتوى التاب – غيّر حسب الحاجة */}
                                {/* {fields.fields} */}

                                <Table.Root>
                                    <Table.Row>
                                        {form.fields
                                            .reverse()
                                            .map((field, idx) => (
                                                <Table.ColumnHeaderCell>
                                                    <Text as="label" dir="">
                                                        {field.label}
                                                    </Text>
                                                    <TextField.Root
                                                        size="3"
                                                        placeholder={
                                                            field.label
                                                        }
                                                        {...register(
                                                            field.label
                                                        )}
                                                    />
                                                </Table.ColumnHeaderCell>
                                            ))}
                                    </Table.Row>
                                </Table.Root>

                                {/* {form.fields.map((v) => {
                            console.log(v);
                            <Text size="2">{v.label}</Text>;
                        })} */}
                            </Tabs.Content>
                        ))}
                        <Flex justify="end" my="3">
                            <Button type="submit">حفظ</Button>
                        </Flex>
                    </Box>
                </Tabs.Root>
            </form>
        </>
    );
}
