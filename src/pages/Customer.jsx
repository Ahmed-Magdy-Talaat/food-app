import React, { useState } from "react";
import Carousel1 from "../../src/component/carousel1"
import Carousel2 from "../../src/component/carousel2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../css/customerstyles.css";
export const Customer = () => {
  const customers = [
    {
      name: "Bassant",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      date: 4,
      rate: 3,
      img: "https://s3-alpha-sig.figma.com/img/cf94/e2d3/5dc71c104cc4080bdb11df36089d0942?Expires=1693785600&Signature=kak5ZtRKQrpcimhjdFfzWchzWj-tcyzYpxJU3CAD7fnuS2CB67SnMtrqlRRzBWVddZLyJPI5nWh~Ku39IGKazlPGyCnD5BtPQDDx5xL-BEIJxJPSGxaQfkQK2Fgs14839b~QW6Z3LUlZv5fvI7vSJX6MANVsBAIOvDBA-bwuu~9Sonl0xVzHuvemvip-3fwnGpJohMp3OdoutrkBqpWOuLJ6vMM-xKpllj2ToWvry8yIaqv9K79ztRh7ivs~dNss2Gmny2aPwgnaTseZ6qGYlSydH2y8enM9K8a-09gPtH2lryZy1~I1eydVrURynl6-5cUKccH2UHXkGLk637oHgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      order: "Edinburgh",
      precentage: 90,
      orderImg:
        "https://s3-alpha-sig.figma.com/img/fed4/56ff/65002905c5ac0e408510b6fe534bf49e?Expires=1693180800&Signature=TOoMdFrbapgP1nyJtgiPkmIjBdByO5IEWBqJVWYDXwkBj1pCYL6AwFa8Wdx8kOWC~NtO92NIgUanjRFrrDJmL1cekjOqKKQCf0W1DeHtTuI6T85QlQQ2wJxgFgVMZ32nRYt7CtzPOU0S-zKKAj55vkhIgBwGYOxWAIW8dx9tUhsC-3GM2NdZFQT48VVoILQ16~c~wMC5AHZVoLYvhcqazZ2dQ4g5g4pnOS~6SqQ7WhHwgQHeAR1JIjt6-KdJul-a18rW8833Wqg3-liCDh5Dzz5ZIBEH0k86~cuhttd9eRartbT50l1flPrVQMyRXM7XuAUKr-7~g~zL8CuI1mrR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 1,
    },
    {
      name: "Mattie Blooman",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      date: 4,
      rate: 4,
      img: "https://s3-alpha-sig.figma.com/img/819c/4cda/82ecef60631f75b990873e5722c4bc08?Expires=1693180800&Signature=cUI4vfYs5BPlczZKyTk9N-S9y-OvBAyffkaw-6FSd84Lb7Fc6mMMEzl-J7dyhG-dEd3dd12KGpTjKINMMaiLg0gctSTMxufkZwR8ajHXysJOS9UH7CW106o4DUPKNeQ7-Rs9IZtIandA1-MX~-zIg3sA6qccThapcHRVYC0dzD4YxUR-3Ar987Rx2eBV7gAmvixqGPTUQ0XQ-V3Uwq0Oyz1utXQF1rcMqKfUk~SyQ-6c-iuNHjc-mZEpjO7lLjT25aNqyDQ1GDS0G4NVMtFBx3~l6-OBAcGjFLgpK8yWAIpaPKkWtgczV2USOyNqxDXUqo0Jm2PR9PcNVmfVqCUavA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      order: "Edinburgh",
      precentage: 70,
      orderImg:
        "https://s3-alpha-sig.figma.com/img/fed4/56ff/65002905c5ac0e408510b6fe534bf49e?Expires=1693180800&Signature=TOoMdFrbapgP1nyJtgiPkmIjBdByO5IEWBqJVWYDXwkBj1pCYL6AwFa8Wdx8kOWC~NtO92NIgUanjRFrrDJmL1cekjOqKKQCf0W1DeHtTuI6T85QlQQ2wJxgFgVMZ32nRYt7CtzPOU0S-zKKAj55vkhIgBwGYOxWAIW8dx9tUhsC-3GM2NdZFQT48VVoILQ16~c~wMC5AHZVoLYvhcqazZ2dQ4g5g4pnOS~6SqQ7WhHwgQHeAR1JIjt6-KdJul-a18rW8833Wqg3-liCDh5Dzz5ZIBEH0k86~cuhttd9eRartbT50l1flPrVQMyRXM7XuAUKr-7~g~zL8CuI1mrR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 2,
    },
    {
      name: "Mattie Blooman",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      date: 2,
      rate: 3,
      img: "https://s3-alpha-sig.figma.com/img/819c/4cda/82ecef60631f75b990873e5722c4bc08?Expires=1693180800&Signature=cUI4vfYs5BPlczZKyTk9N-S9y-OvBAyffkaw-6FSd84Lb7Fc6mMMEzl-J7dyhG-dEd3dd12KGpTjKINMMaiLg0gctSTMxufkZwR8ajHXysJOS9UH7CW106o4DUPKNeQ7-Rs9IZtIandA1-MX~-zIg3sA6qccThapcHRVYC0dzD4YxUR-3Ar987Rx2eBV7gAmvixqGPTUQ0XQ-V3Uwq0Oyz1utXQF1rcMqKfUk~SyQ-6c-iuNHjc-mZEpjO7lLjT25aNqyDQ1GDS0G4NVMtFBx3~l6-OBAcGjFLgpK8yWAIpaPKkWtgczV2USOyNqxDXUqo0Jm2PR9PcNVmfVqCUavA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      order: "Edinburgh",
      precentage: 70,
      orderImg:
        "https://s3-alpha-sig.figma.com/img/fed4/56ff/65002905c5ac0e408510b6fe534bf49e?Expires=1693180800&Signature=TOoMdFrbapgP1nyJtgiPkmIjBdByO5IEWBqJVWYDXwkBj1pCYL6AwFa8Wdx8kOWC~NtO92NIgUanjRFrrDJmL1cekjOqKKQCf0W1DeHtTuI6T85QlQQ2wJxgFgVMZ32nRYt7CtzPOU0S-zKKAj55vkhIgBwGYOxWAIW8dx9tUhsC-3GM2NdZFQT48VVoILQ16~c~wMC5AHZVoLYvhcqazZ2dQ4g5g4pnOS~6SqQ7WhHwgQHeAR1JIjt6-KdJul-a18rW8833Wqg3-liCDh5Dzz5ZIBEH0k86~cuhttd9eRartbT50l1flPrVQMyRXM7XuAUKr-7~g~zL8CuI1mrR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 3,
    },
    {
      name: "Mattie Blooman",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      date: 2,
      rate: 3,
      img: "https://s3-alpha-sig.figma.com/img/819c/4cda/82ecef60631f75b990873e5722c4bc08?Expires=1693180800&Signature=cUI4vfYs5BPlczZKyTk9N-S9y-OvBAyffkaw-6FSd84Lb7Fc6mMMEzl-J7dyhG-dEd3dd12KGpTjKINMMaiLg0gctSTMxufkZwR8ajHXysJOS9UH7CW106o4DUPKNeQ7-Rs9IZtIandA1-MX~-zIg3sA6qccThapcHRVYC0dzD4YxUR-3Ar987Rx2eBV7gAmvixqGPTUQ0XQ-V3Uwq0Oyz1utXQF1rcMqKfUk~SyQ-6c-iuNHjc-mZEpjO7lLjT25aNqyDQ1GDS0G4NVMtFBx3~l6-OBAcGjFLgpK8yWAIpaPKkWtgczV2USOyNqxDXUqo0Jm2PR9PcNVmfVqCUavA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      order: "Edinburgh",
      precentage: 70,
      orderImg:
        "https://s3-alpha-sig.figma.com/img/fed4/56ff/65002905c5ac0e408510b6fe534bf49e?Expires=1693180800&Signature=TOoMdFrbapgP1nyJtgiPkmIjBdByO5IEWBqJVWYDXwkBj1pCYL6AwFa8Wdx8kOWC~NtO92NIgUanjRFrrDJmL1cekjOqKKQCf0W1DeHtTuI6T85QlQQ2wJxgFgVMZ32nRYt7CtzPOU0S-zKKAj55vkhIgBwGYOxWAIW8dx9tUhsC-3GM2NdZFQT48VVoILQ16~c~wMC5AHZVoLYvhcqazZ2dQ4g5g4pnOS~6SqQ7WhHwgQHeAR1JIjt6-KdJul-a18rW8833Wqg3-liCDh5Dzz5ZIBEH0k86~cuhttd9eRartbT50l1flPrVQMyRXM7XuAUKr-7~g~zL8CuI1mrR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 4,
    },
    {
      name: "Mattie Blooman",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      date: 2,
      rate: 3,
      img: "https://s3-alpha-sig.figma.com/img/819c/4cda/82ecef60631f75b990873e5722c4bc08?Expires=1693180800&Signature=cUI4vfYs5BPlczZKyTk9N-S9y-OvBAyffkaw-6FSd84Lb7Fc6mMMEzl-J7dyhG-dEd3dd12KGpTjKINMMaiLg0gctSTMxufkZwR8ajHXysJOS9UH7CW106o4DUPKNeQ7-Rs9IZtIandA1-MX~-zIg3sA6qccThapcHRVYC0dzD4YxUR-3Ar987Rx2eBV7gAmvixqGPTUQ0XQ-V3Uwq0Oyz1utXQF1rcMqKfUk~SyQ-6c-iuNHjc-mZEpjO7lLjT25aNqyDQ1GDS0G4NVMtFBx3~l6-OBAcGjFLgpK8yWAIpaPKkWtgczV2USOyNqxDXUqo0Jm2PR9PcNVmfVqCUavA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      order: "Edinburgh",
      precentage: 70,
      orderImg:
        "https://s3-alpha-sig.figma.com/img/fed4/56ff/65002905c5ac0e408510b6fe534bf49e?Expires=1693180800&Signature=TOoMdFrbapgP1nyJtgiPkmIjBdByO5IEWBqJVWYDXwkBj1pCYL6AwFa8Wdx8kOWC~NtO92NIgUanjRFrrDJmL1cekjOqKKQCf0W1DeHtTuI6T85QlQQ2wJxgFgVMZ32nRYt7CtzPOU0S-zKKAj55vkhIgBwGYOxWAIW8dx9tUhsC-3GM2NdZFQT48VVoILQ16~c~wMC5AHZVoLYvhcqazZ2dQ4g5g4pnOS~6SqQ7WhHwgQHeAR1JIjt6-KdJul-a18rW8833Wqg3-liCDh5Dzz5ZIBEH0k86~cuhttd9eRartbT50l1flPrVQMyRXM7XuAUKr-7~g~zL8CuI1mrR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 5,
    },
    {
      name: "Mattie Blooman",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      date: 2,
      rate: 3,
      img: "https://s3-alpha-sig.figma.com/img/819c/4cda/82ecef60631f75b990873e5722c4bc08?Expires=1693180800&Signature=cUI4vfYs5BPlczZKyTk9N-S9y-OvBAyffkaw-6FSd84Lb7Fc6mMMEzl-J7dyhG-dEd3dd12KGpTjKINMMaiLg0gctSTMxufkZwR8ajHXysJOS9UH7CW106o4DUPKNeQ7-Rs9IZtIandA1-MX~-zIg3sA6qccThapcHRVYC0dzD4YxUR-3Ar987Rx2eBV7gAmvixqGPTUQ0XQ-V3Uwq0Oyz1utXQF1rcMqKfUk~SyQ-6c-iuNHjc-mZEpjO7lLjT25aNqyDQ1GDS0G4NVMtFBx3~l6-OBAcGjFLgpK8yWAIpaPKkWtgczV2USOyNqxDXUqo0Jm2PR9PcNVmfVqCUavA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      order: "Edinburgh",
      precentage: 70,
      orderImg:
        "https://s3-alpha-sig.figma.com/img/fed4/56ff/65002905c5ac0e408510b6fe534bf49e?Expires=1693180800&Signature=TOoMdFrbapgP1nyJtgiPkmIjBdByO5IEWBqJVWYDXwkBj1pCYL6AwFa8Wdx8kOWC~NtO92NIgUanjRFrrDJmL1cekjOqKKQCf0W1DeHtTuI6T85QlQQ2wJxgFgVMZ32nRYt7CtzPOU0S-zKKAj55vkhIgBwGYOxWAIW8dx9tUhsC-3GM2NdZFQT48VVoILQ16~c~wMC5AHZVoLYvhcqazZ2dQ4g5g4pnOS~6SqQ7WhHwgQHeAR1JIjt6-KdJul-a18rW8833Wqg3-liCDh5Dzz5ZIBEH0k86~cuhttd9eRartbT50l1flPrVQMyRXM7XuAUKr-7~g~zL8CuI1mrR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 6,
    },
    {
      name: "Mattie Blooman",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      date: 2,
      rate: 3,
      img: "https://s3-alpha-sig.figma.com/img/819c/4cda/82ecef60631f75b990873e5722c4bc08?Expires=1693180800&Signature=cUI4vfYs5BPlczZKyTk9N-S9y-OvBAyffkaw-6FSd84Lb7Fc6mMMEzl-J7dyhG-dEd3dd12KGpTjKINMMaiLg0gctSTMxufkZwR8ajHXysJOS9UH7CW106o4DUPKNeQ7-Rs9IZtIandA1-MX~-zIg3sA6qccThapcHRVYC0dzD4YxUR-3Ar987Rx2eBV7gAmvixqGPTUQ0XQ-V3Uwq0Oyz1utXQF1rcMqKfUk~SyQ-6c-iuNHjc-mZEpjO7lLjT25aNqyDQ1GDS0G4NVMtFBx3~l6-OBAcGjFLgpK8yWAIpaPKkWtgczV2USOyNqxDXUqo0Jm2PR9PcNVmfVqCUavA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      order: "Edinburgh",
      precentage: 70,
      orderImg:
        "https://s3-alpha-sig.figma.com/img/fed4/56ff/65002905c5ac0e408510b6fe534bf49e?Expires=1693180800&Signature=TOoMdFrbapgP1nyJtgiPkmIjBdByO5IEWBqJVWYDXwkBj1pCYL6AwFa8Wdx8kOWC~NtO92NIgUanjRFrrDJmL1cekjOqKKQCf0W1DeHtTuI6T85QlQQ2wJxgFgVMZ32nRYt7CtzPOU0S-zKKAj55vkhIgBwGYOxWAIW8dx9tUhsC-3GM2NdZFQT48VVoILQ16~c~wMC5AHZVoLYvhcqazZ2dQ4g5g4pnOS~6SqQ7WhHwgQHeAR1JIjt6-KdJul-a18rW8833Wqg3-liCDh5Dzz5ZIBEH0k86~cuhttd9eRartbT50l1flPrVQMyRXM7XuAUKr-7~g~zL8CuI1mrR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 7,
    },
    {
      name: "Mattie Blooman",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      date: 2,
      rate: 3,
      img: "https://s3-alpha-sig.figma.com/img/819c/4cda/82ecef60631f75b990873e5722c4bc08?Expires=1693180800&Signature=cUI4vfYs5BPlczZKyTk9N-S9y-OvBAyffkaw-6FSd84Lb7Fc6mMMEzl-J7dyhG-dEd3dd12KGpTjKINMMaiLg0gctSTMxufkZwR8ajHXysJOS9UH7CW106o4DUPKNeQ7-Rs9IZtIandA1-MX~-zIg3sA6qccThapcHRVYC0dzD4YxUR-3Ar987Rx2eBV7gAmvixqGPTUQ0XQ-V3Uwq0Oyz1utXQF1rcMqKfUk~SyQ-6c-iuNHjc-mZEpjO7lLjT25aNqyDQ1GDS0G4NVMtFBx3~l6-OBAcGjFLgpK8yWAIpaPKkWtgczV2USOyNqxDXUqo0Jm2PR9PcNVmfVqCUavA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      order: "Edinburgh",
      precentage: 70,
      orderImg:
        "https://s3-alpha-sig.figma.com/img/fed4/56ff/65002905c5ac0e408510b6fe534bf49e?Expires=1693180800&Signature=TOoMdFrbapgP1nyJtgiPkmIjBdByO5IEWBqJVWYDXwkBj1pCYL6AwFa8Wdx8kOWC~NtO92NIgUanjRFrrDJmL1cekjOqKKQCf0W1DeHtTuI6T85QlQQ2wJxgFgVMZ32nRYt7CtzPOU0S-zKKAj55vkhIgBwGYOxWAIW8dx9tUhsC-3GM2NdZFQT48VVoILQ16~c~wMC5AHZVoLYvhcqazZ2dQ4g5g4pnOS~6SqQ7WhHwgQHeAR1JIjt6-KdJul-a18rW8833Wqg3-liCDh5Dzz5ZIBEH0k86~cuhttd9eRartbT50l1flPrVQMyRXM7XuAUKr-7~g~zL8CuI1mrR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 8,
    },
    {
      name: "Mattie Blooman",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
      date: 2,
      rate: 3,
      img: "https://s3-alpha-sig.figma.com/img/819c/4cda/82ecef60631f75b990873e5722c4bc08?Expires=1693180800&Signature=cUI4vfYs5BPlczZKyTk9N-S9y-OvBAyffkaw-6FSd84Lb7Fc6mMMEzl-J7dyhG-dEd3dd12KGpTjKINMMaiLg0gctSTMxufkZwR8ajHXysJOS9UH7CW106o4DUPKNeQ7-Rs9IZtIandA1-MX~-zIg3sA6qccThapcHRVYC0dzD4YxUR-3Ar987Rx2eBV7gAmvixqGPTUQ0XQ-V3Uwq0Oyz1utXQF1rcMqKfUk~SyQ-6c-iuNHjc-mZEpjO7lLjT25aNqyDQ1GDS0G4NVMtFBx3~l6-OBAcGjFLgpK8yWAIpaPKkWtgczV2USOyNqxDXUqo0Jm2PR9PcNVmfVqCUavA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      order: "Edinburgh",
      precentage: 70,
      orderImg:
        "https://s3-alpha-sig.figma.com/img/fed4/56ff/65002905c5ac0e408510b6fe534bf49e?Expires=1693180800&Signature=TOoMdFrbapgP1nyJtgiPkmIjBdByO5IEWBqJVWYDXwkBj1pCYL6AwFa8Wdx8kOWC~NtO92NIgUanjRFrrDJmL1cekjOqKKQCf0W1DeHtTuI6T85QlQQ2wJxgFgVMZ32nRYt7CtzPOU0S-zKKAj55vkhIgBwGYOxWAIW8dx9tUhsC-3GM2NdZFQT48VVoILQ16~c~wMC5AHZVoLYvhcqazZ2dQ4g5g4pnOS~6SqQ7WhHwgQHeAR1JIjt6-KdJul-a18rW8833Wqg3-liCDh5Dzz5ZIBEH0k86~cuhttd9eRartbT50l1flPrVQMyRXM7XuAUKr-7~g~zL8CuI1mrR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 9,
    },
  ];

  return (
    <>
      <div className="container-customer">
        <div className="carousel-container">
          <Carousel1 items={customers} style={{ height: "500px" }}></Carousel1>
        </div>
        <div className="customer-review">
          <Carousel2 items={customers}></Carousel2>
        </div>
      </div>
    </>
  );
};
