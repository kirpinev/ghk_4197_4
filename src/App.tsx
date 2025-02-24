import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import smart from "./assets/smart.png";
import drums from "./assets/drums.png";
import smileArrow from "./assets/smile-arrow.png";
import gift from "./assets/gift.png";
import cashback from "./assets/cashback.png";
import percent from "./assets/percent.png";
import free from "./assets/free.png";
import transfer from "./assets/transfer.png";
import cash from "./assets/cash.png";
import discount from "./assets/discount.png";
import family from "./assets/family.png";
import information from "./assets/information.png";
import protection from "./assets/protection.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { Status } from "@alfalab/core-components/status";
import { Link } from "@alfalab/core-components/link";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";
import { List } from "@alfalab/core-components/list";

interface Product {
  title: string;
  text: string;
  image: string;
  isNew?: boolean;
}

const familyProducts: Array<Product> = [
  {
    title: "Все преимущества доступны близким",
    text: "Делитесь бесплатно до конца года",
    image: family,
  },
];

const products: Array<Product> = [
  {
    title: "Бесплатная защита от мошенничества",
    text: "Бесплатно и надежно",
    image: protection,
    isNew: true,
  },
  {
    title: "+1 топовая категория кэшбэка",
    text: "5% на самое популярное",
    image: smileArrow,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: drums,
  },
  {
    title: "Секретная подборка партнёров с кэшбэком",
    text: "Доступ к специальным предложениям",
    image: gift,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в месяц вместо 5000 ₽ за покупки в категориях",
    image: cashback,
  },
  {
    title: "+1% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: percent,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: free,
  },
  {
    title: "Бесплатные переводы",
    text: "По России без ограничений по сумме",
    image: transfer,
  },
  {
    title: "Бесплатное снятие наличных",
    text: "В банкоматах любых банков России",
    image: cash,
  },
  {
    title: "Скидка 20% на комиссию на бирже",
    text: "0,24% за сделки с ценными бумагами и валютой",
    image: discount,
  },
];

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [expanded, setExpanded] = useState(false);

  const clickMore = () => {
    window.gtag("event", "4197_get_info", {
      variant_name: "4197_4",
    });
  };

  const clickSubmitMore = () => {
    window.gtag("event", "4197_get_sub_after_info", {
      variant_name: "4197_4",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  const submit = () => {
    window.gtag("event", "4197_get_sub", {
      variant_name: "4197_4",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={smart} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Стоимость — 399 ₽ в месяц
          </Typography.Text>
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            В вашей подписке
          </Typography.TitleResponsive>

          {products.map((product, index) => (
            <div className={appSt.product} key={product.title}>
              {product.isNew && (
                <Status
                  view="contrast"
                  uppercase={false}
                  color="red"
                  size={24}
                  className={appSt.status}
                >
                  Новое
                </Status>
              )}

              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>
                {index === 0 ? (
                  <Link
                    pseudo={true}
                    view="secondary"
                    onClick={() => {
                      setExpanded(true);
                      clickMore();
                    }}
                  >
                    Подробнее
                  </Link>
                ) : (
                  <Typography.Text
                    view="secondary-large"
                    tag="p"
                    color="secondary"
                    className={appSt.productText}
                  >
                    {product.text}
                  </Typography.Text>
                )}
              </div>
              <img
                src={product.image}
                alt=""
                width={96}
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            Семейный доступ
          </Typography.TitleResponsive>

          {familyProducts.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                width={96}
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>
      </div>

      <BottomSheet
        open={expanded}
        onClose={() => setExpanded(false)}
        titleAlign="center"
        title="Защита от мошенничества"
        actionButton={
          <ButtonMobile block view="primary" onClick={clickSubmitMore}>
            Оформить подписку за 399₽/мес.
          </ButtonMobile>
        }
      >
        <List tag="ul" marker="•">
          <List.Item>Несанкционированное снятие денежных средств</List.Item>
          <List.Item>
            Кража наличных денежных средств при нападении или грабеже
          </List.Item>
          <List.Item>Утеря или хищение банковской карты</List.Item>
        </List>

        <Gap size={32} />

        <div className={appSt.subscription}>
          <img src={information} alt="" width={24} height={24} />
          <div>
            <Typography.Text
              view="primary-medium"
              className={appSt.subscriptionText}
            >
              85% пользователей Альфа-Смарт уже подключили страховку от
              мошенников
            </Typography.Text>
          </div>
        </div>

        <Gap size={16} />
      </BottomSheet>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" onClick={submit}>
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
