import { GetServerSidePropsContext } from "next";
import {
  formatCamUrl,
  formatProductsUrl,
  formatStartWashUrl,
} from "@/utils/formatUrls";
import WWButton from "@/components/WWButton";
import styles from "@/pageStyles/LocationId.module.css";
import { useDispatch } from "react-redux";
import { updateWashInfo } from "@/store/slices/washSlice";
import { useRouter } from "next/router";

export interface WWProgram {
  description: string;
  name: string;
  price: string;
  productid: number;
  program: number;
}

export interface SelectProgramProps {
  locationId: string;
  products: WWProgram[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const locationId = (context?.params?.locationId as string) || undefined;

  if (!locationId) {
    return {
      notFound: true,
    };
  }

  const lpn = await fetch(formatCamUrl(locationId))
    .then((response) => response.json())
    .then((body) => body.response.lpn);

  const products = await fetch(formatProductsUrl(lpn))
    .then((response) => response.json())
    .then((body) => {
      return body.response.products;
    });

  // Pass data to the page via props
  return { props: { locationId, products } };
}

export default function SelectProgram({
  locationId,
  products,
}: SelectProgramProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = async (product: WWProgram) => {
    fetch(formatStartWashUrl(locationId, product.program), {
      method: "POST",
    })
      .then((response) => response.json())
      .then((body) => {
        if (body.error) {
          throw body.error;
        }
        return body.response;
      })
      .then((WWResponse) => {
        dispatch(updateWashInfo(WWResponse));
        router.push("/wash");
      })
      .catch((error) => {
        console.log("yo", error);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Program</h1>
        <p>Vælg det ønskede program</p>
      </div>
      <div className={styles.grid}>
        {products.map((product) => {
          return (
            <WWButton
              key={product.productid + ""}
              buttonText={product.name}
              onClick={() => handleClick(product)}
            >
              <p className={styles.description}>{product.description}</p>
              <p className={styles.price}>{product.price} kr</p>
            </WWButton>
          );
        })}
      </div>
    </>
  );
}
